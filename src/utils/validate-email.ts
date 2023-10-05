const validateEmail = (email: string) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);

export default validateEmail;
