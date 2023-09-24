import * as yup from "yup";

// Kaynak: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Şifre için Kurallar:
// 1 büyük 1 küçük harf
// 1 sayı
// 1 özel karakter

const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lutfen gecerli bir email giriniz")
    .required("Zorunlu alan"),
  age: yup
    .number()
    .positive()
    .min(18, " 18 Yasindan kucukler giremez")
    .max(100, "Yasiniz 100'den buyuk olamaz")
    .required("Zorunlu alan"),
  password: yup
    .string()
    .min(5, "Sifre en az 5 karakter olmali")
    .matches(passwordRules, "Lutfen daha guclu bir sifre giriniz")
    .required("Zorunlu alan"),
  confirmPassword: yup
    .string()
    // oneOf: elamanin degeri verilen degerlerden biriyle eslesiyormu kontrol eder
    // ref: farkli bir inputun degerini cagirmaya yarar
    .oneOf([yup.ref("password")], "Sifre eslesmiyor")
    .required("Zorunlu alan"),
  terms: yup.boolean().isTrue("Kosullari kabul etmeden devam edemezsiniz"),
});
