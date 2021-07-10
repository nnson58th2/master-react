import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: 'Son Nguyen',
      email: '',
      nation: 'vietnam',
      hobby: null,
      sex: '',
      password: '',
      confirmPassword: ''
    }
  })

  const obSubmit = data => console.log(data)

  const handleClass = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`

  const ErrorMessage = ({ name }) => {
    if (errors[name]) {
      return <div className="invalid-feedback">{errors[name].message}</div>
    }

    return null
  }

  return (
    <div className="container">
      <form noValidate className="mt-5" onSubmit={handleSubmit(obSubmit)}>
        <div className="form-floating mb-3">
          <input
            id="name"
            className={handleClass('name')}
            name="name"
            placeholder="Alan Walker"
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Tên là bắt buộc'
              },
              minLength: {
                value: 2,
                message: 'Tên từ 2-160 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Tên từ 2-160 ký tự'
              }
            })}
          />
          <label htmlFor="name">Name</label>

          <ErrorMessage name="name" />
        </div>

        <div className="form-floating mb-3">
          <input
            id="email"
            className={handleClass('email')}
            name="email"
            placeholder="nam@gmail.com"
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email thì bắt buộc nhập'
              },
              validate: {
                email: v =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) ||
                  'Email không đúng định dạng'
              }
            })}
          />
          <label htmlFor="email">Email address</label>

          <ErrorMessage name="email" />
        </div>

        <div className="form-floating mb-3">
          <input
            id="password"
            className={handleClass('password')}
            name="password"
            placeholder="***"
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Mật khẩu là bắt buộc'
              },
              minLength: {
                value: 2,
                message: 'Mật khẩu từ 6-24 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Mật khẩu từ 6-24 ký tự'
              }
            })}
          />
          <label htmlFor="password">Password</label>

          <ErrorMessage name="password" />
        </div>

        <div className="form-floating mb-3">
          <input
            id="confirmPassword"
            className={handleClass('confirmPassword')}
            name="confirmPassword"
            placeholder="***"
            type="password"
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'Mật khẩu là bắt buộc'
              },
              minLength: {
                value: 2,
                message: 'Mật khẩu từ 6-24 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Mật khẩu từ 6-24 ký tự'
              },
              validate: {
                samePassword: v => v === getValues('password') || 'Nhập lại mật khẩu không khớp'
              }
            })}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>

          <ErrorMessage name="confirmPassword" />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              id="vietnam"
              className={handleClass('nation', 'form-check-input')}
              name="nation"
              type="radio"
              value="vietnam"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="vietnam" className="form-check-label">
              Việt Nam
            </label>
          </div>

          <div className="form-check">
            <input
              id="aboard"
              className={handleClass('nation', 'form-check-input')}
              name="nation"
              type="radio"
              value="aboard"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="aboard" className="form-check-label">
              Aboard
            </label>

            <ErrorMessage name="nation" />
          </div>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              id="gym"
              className={handleClass('hobby', 'form-check-input')}
              name="hobby"
              type="checkbox"
              value="gym"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>

          <div className="form-check">
            <input
              id="other"
              className={handleClass('hobby', 'form-check-input')}
              name="hobby"
              type="checkbox"
              value="other"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>

            <ErrorMessage name="hobby" />
          </div>
        </div>

        <div className="mb-3">
          <select
            name="sex"
            className={handleClass('sex', 'form-select')}
            {...register('sex', {
              required: {
                value: true,
                message: 'Trường này là bắt buộc'
              }
            })}
          >
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>

          <ErrorMessage name="sex" />
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
