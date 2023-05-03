# Forms

## Forms what should situated here (with types, validation, etc)

### Example

- Login
- Register
- Upd something
- ...

## Code example

```tsx

export interface LoginFormProps extends ComponentPropsWithoutRef<"form"> {
  onFormSubmit: (values: LoginFormValues) => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const {onFormSubmit, className, ...rest} = props

  const form = useFormik(...)

  return (
    <>
      <FormikProvader value={form}>
        <Form>
          <FormikInput name="email" />
          <FormikInput name="password" />
          <FormikCheckbox name="remember" />
        </Form>
      </FormikProvader>
    </>
  )
}

```
