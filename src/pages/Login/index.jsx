import { useFormik } from "formik";
import { schema } from "../schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const { user, signUser } = useContext(UserContext);

  const navigate = useNavigate();
  // daha once kullanici olusturulduysa
  if (user) {
    // ana sayfaya yonlendir
    navigate("/coins");
  }

  // useFormik: formik ozelliklerini kullanmamizi saglayan hook
  const formik = useFormik({
    // formda tutulacak degerleri belirleme
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: schema,

    onSubmit: async (values, { resetForm }) => {
      //api istegini simule etme
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // kullanici hesabi olusturur
      signUser(values);
      // formu sifirlar
      resetForm();
      // yonlendirme
      navigate("coins");
    },
  });
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/public/crypto.png" />
          <h3>Crypto Trading</h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              className={formik.errors.email && formik.touched.email && "error"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              type="email"
              placeholder="Email giriniz..."
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label>Yas</label>
            <input
              className={formik.errors.age && formik.touched.age && "error"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              name="age"
              type="number"
              placeholder="Yas giriniz...."
            />
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
            )}
          </div>
          <div>
            <label>Sifre</label>
            <input
              className={
                formik.errors.password && formik.touched.password && "error"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              type="password"
              placeholder="Sifre giriniz..."
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div>
            <label>Sifre Onay</label>
            <input
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Sifre tekrari..."
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>
          <div className="check-wrapper">
            <div className="check">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
                name="terms"
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">Kosullari okudum ve onayliyorum</label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </>
  );
}
