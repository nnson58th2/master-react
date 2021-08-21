import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { getDate, getMonth, getYear, isExists } from 'date-fns'
import range from 'lodash/range'

import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputText from 'src/components/InputText/InputText'
import { updateMe } from 'src/pages/Auth/auth.slice'

import * as S from './profile.style'

export default function Profile() {
  const profile = useSelector(state => state.auth.profile)
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      name: profile.name || '',
      phone: profile.phone || '',
      address: profile.address || '',
      date: profile.data_of_birth ? getDate(new Date(profile.data_of_birth)) : '',
      month: profile.data_of_birth ? getMonth(new Date(profile.data_of_birth)) : '',
      year: profile.data_of_birth ? getYear(new Date(profile.data_of_birth)) : ''
    }
  })

  const dispatch = useDispatch()

  const validateDate = () =>
    isExists(Number(getValues('year')), Number(getValues('month')), Number(getValues('date'))) || 'Ngày sinh không đúng'

  const updateProfile = async data => {
    const payload = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      date_of_birth: new Date(data.year, data.month, data.date).toISOString()
    }

    try {
      const result = await dispatch(updateMe(payload)).then(unwrapResult)
      toast.success(result.message, {
        position: 'top-center',
        autoClose: 2500
      })
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }

  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>Quản lý thông tin hồ sơ để bảo mật tài khoản</S.ProfileHeaderSubtitle>
      </S.ProfileHeader>

      <S.ProfileInfo>
        <S.ProfileLeft onSubmit={handleSubmit(updateProfile)}>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>{profile.email}</S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Tên</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="name"
                control={control}
                rules={rules.name}
                render={({ field }) => (
                  <InputText name="name" type="text" value={getValues('name')} onChange={field.onChange} />
                )}
              />
              <ErrorMessage name="name" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="phone"
                control={control}
                rules={rules.phone}
                render={({ field }) => (
                  <InputText name="phone" type="text" value={getValues('phone')} onChange={field.onChange} />
                )}
              />
              <ErrorMessage name="phone" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="address"
                control={control}
                rules={rules.address}
                render={({ field }) => (
                  <InputText name="address" type="text" value={getValues('address')} onChange={field.onChange} />
                )}
              />
              <ErrorMessage name="address" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <Controller
                  name="date"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Ngày"
                      option={range(1, 32).map(item => ({
                        name: item,
                        value: item
                      }))}
                      value={getValues('date')}
                      onChange={field.onChange}
                    />
                  )}
                />

                <Controller
                  name="month"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Tháng"
                      option={range(0, 12).map(item => ({
                        name: item + 1,
                        value: item
                      }))}
                      value={getValues('month')}
                      onChange={field.onChange}
                    />
                  )}
                />

                <Controller
                  name="year"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.SelectDate
                      title="Năm"
                      option={range(1900, 2022).map(item => ({
                        name: item,
                        value: item
                      }))}
                      value={getValues('year')}
                      onChange={field.onChange}
                    />
                  )}
                />
              </S.DateSelect>
            </S.InputLabelContent>

            <S.ErrorMessage>
              <ErrorMessage name="date" errors={errors} />
            </S.ErrorMessage>
          </S.InputLabel>

          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </S.ProfileLeft>

        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img src="https://avatars.githubusercontent.com/u/45548982?v=4" alt="Avatar" />
            </S.Avatar>
            <S.InputFile accept=".jpg,.jpeg,.png" type="file" />
            <S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Dụng lượng file tối đa 1 MB</div>
              <div>Định dạng:.JPG, .JPEG, .PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  )
}
