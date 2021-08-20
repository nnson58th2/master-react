import React from 'react'

import InputPassword from 'src/components/InputPassword/InputPassword'
import { PasswordContent } from './password.style'
import * as S from '../Profile/profile.style'

export default function Password() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>
          Để bảo mật tài khoản, vui lòng không chia sẽ mật khẩu cho người khác
        </S.ProfileHeaderSubtitle>

        <PasswordContent>
          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="old-password" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="new-password" />
            </S.InputLabelContent>
          </S.InputLabel>

          <S.InputLabel>
            <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputPassword name="confirm-new-password" />
            </S.InputLabelContent>
          </S.InputLabel>
        </PasswordContent>

        <S.Submit>
          <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
        </S.Submit>
      </S.ProfileHeader>
    </S.Profile>
  )
}
