import { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다";
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
      isValid = false;
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "전화번호를 입력해주세요";
      isValid = false;
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/-/g, ""))) {
      newErrors.phone = "유효한 전화번호를 입력해주세요";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form data to your API
      console.log("Form submitted:", formData);
      // You would typically make an API call here
    }
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="8자 이상 입력해주세요"
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </InputGroup>

      <CheckboxGroup>
        <Checkbox
          id="agreement"
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
        />
        <Label htmlFor="agreement">
          이용약관 및 개인정보 처리방침에 동의합니다
        </Label>
      </CheckboxGroup>

      <SubmitButton type="submit" disabled={!formData.agreement}>
        가입하기
      </SubmitButton>
    </SignUpForm>
  );
};

export default SignUp;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

const ErrorMessage = styled.span`
  color: #e53935;
  font-size: 12px;
  margin-top: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background-color: #3b78c2;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
