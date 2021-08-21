import { isEmail } from 'src/utils/helper'

export const rules = {
  name: {
    maxLength: {
      value: 160,
      message: 'Tên có độ dài tối đa là 160 kí tự'
    }
  },
  phone: {
    maxLength: {
      value: 10,
      message: 'Số điện thoại có độ dài tối đa là 10 kí tự'
    }
  },
  address: {
    maxLength: {
      name: 160,
      message: 'Địa chỉ có độ dài tối đa là 160 kí tự'
    }
  },
  email: {
    require: {
      value: true,
      message: 'Email là bắt buộc nhập'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 5 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 5 - 160 kí tự'
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng'
    }
  },
  password: {
    require: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 - 160 kí tự'
    }
  },
  comfirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 kí tự'
    }
  }
}
