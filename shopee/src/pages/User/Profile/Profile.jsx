import React from 'react'
import range from 'lodash/range'

import InputText from 'src/components/InputText/InputText'

import * as S from './profile.style'

export default function Profile() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>Quản lý thông tin hồ sơ để bảo mật tài khoản</S.ProfileHeaderSubtitle>
      </S.ProfileHeader>

      <S.ProfileInfo>
        <S.ProfileLeft>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>nhuson2306@gmail.com</S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Tên</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="name" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="phone" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="address" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <S.SelectDate
                  title="Ngày"
                  option={range(1, 32).map(item => ({
                    name: item,
                    value: item
                  }))}
                />

                <S.SelectDate
                  title="Tháng"
                  option={range(0, 12).map(item => ({
                    name: item + 1,
                    value: item
                  }))}
                />

                <S.SelectDate
                  title="Năm"
                  option={range(1900, 2022).map(item => ({
                    name: item,
                    value: item
                  }))}
                />
              </S.DateSelect>
            </S.InputLabelContent>
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
