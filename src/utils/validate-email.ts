const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export default validateEmail;
