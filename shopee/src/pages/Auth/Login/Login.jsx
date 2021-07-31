import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useForm, Controller } from 'react-hook-form'

import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'

import { Button } from 'src/assets/styles/utils'
import { rules } from 'src/constants/rules'
import { path } from 'src/constants/path'

import { login } from '../auth.slice'
import * as S from '../Register/register.style'

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const response = await dispatch(login(body))
      unwrapResult(response)
      history.push(path.home)
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
    <S.StyledRegister>
      <S.Container className="container">
        <S.Banner />
        <S.FormWrapper>
          <S.FormTitle>Đăng nhập</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
            <S.FormControl>
              <Controller
                name="email"
                control={control}
                rules={rules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={field.onChange}
                    value={getValues('email')}
                  />
                )}
              />

              <ErrorMessage errors={errors} name="email" />
            </S.FormControl>
            <S.FormControl>
              <Controller
                name="password"
                control={control}
                rules={rules.password}
                render={({ field }) => (
                  <InputPassword
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />

              <ErrorMessage errors={errors} name="password" />
            </S.FormControl>
            <S.FormButton>
              <Button type="submit">Đăng nhập</Button>
            </S.FormButton>
          </S.Form>
          <S.FormFooter>
            <span>Bạn mới biết đến Shopee?</span>
            <Link to={path.register} className="link">
              Đăng ký
            </Link>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Container>
    </S.StyledRegister>
  )
}
