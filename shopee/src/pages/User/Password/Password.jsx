import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'

import { PasswordContent } from './password.style'
import * as S from '../Profile/profile.style'
import { updateMe } from 'src/pages/Auth/auth.slice'

export default function Password() {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
      confirmed_new_password: ''
    }
  })

  const dispatch = useDispatch()

  const updatePassword = async data => {
    const payload = {
      password: data.password,
      new_password: data.new_password
    }

    try {
      await dispatch(updateMe(payload)).then(unwrapResult)
      reset()

      toast.success('Đổi mật khẩu thành công', {
        position: 'top-center',
        autoClose: 2000
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
        <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>
          Để bảo mật tài khoản, vui lòng không chia sẽ mật khẩu cho người khác
        </S.ProfileHeaderSubtitle>

        <PasswordContent onSubmit={handleSubmit(updatePassword)}>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword name="password" value={getValues('password')} onChange={field.onChange} />
                )}
              />
              <ErrorMessage name="password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="new_password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword name="new_password" value={getValues('new_password')} onChange={field.onChange} />
                )}
              />
              <ErrorMessage name="new_password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
            <S.InputLabelContent>
              <Controller
                name="confirmed_new_password"
                control={control}
                rules={{
                  ...rules.password,
                  validate: {
                    samePassword: v => v === getValues('new_password') || 'Mật khẩu nhập lại không khớp'
                  }
                }}
                render={({ field }) => (
                  <InputPassword
                    name="confirmed_new_password"
                    value={getValues('confirmed_new_password')}
                    onChange={field.onChange}
                  />
                )}
              />
              <ErrorMessage name="confirmed_new_password" errors={errors} />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </PasswordContent>
      </S.ProfileHeader>
    </S.Profile>
  )
}
