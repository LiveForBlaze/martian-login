import { validateEmail, validatePassword, validateForm } from "../validate";

describe("validateEmail", () => {
  it("should return error when email is empty", () => {
    expect(validateEmail("")).toBe("Email is required.");
  });

  it("should return error for invalid email formats", () => {
    expect(validateEmail("test")).toBe("Email is invalid.");
    expect(validateEmail("test@")).toBe("Email is invalid.");
    expect(validateEmail("test@test")).toBe("Email is invalid.");
    expect(validateEmail("test@test.")).toBe("Email is invalid.");
    expect(validateEmail("test @test.com")).toBe("Email is invalid.");
    expect(validateEmail("test@ test.com")).toBe("Email is invalid.");
  });

  it("should return empty string for valid email formats", () => {
    expect(validateEmail("test@test.com")).toBe("");
    expect(validateEmail("user.name+tag@domain.co.uk")).toBe("");
    expect(validateEmail("firstname.lastname@example.com")).toBe("");
    expect(validateEmail("email@subdomain.example.com")).toBe("");
  });
});

describe("validatePassword", () => {
  it("should return error when password is empty", () => {
    expect(validatePassword("")).toBe("Password is required.");
  });

  it("should return error when password is too short", () => {
    expect(validatePassword("12345")).toBe(
      "Password must be at least 6 characters."
    );
  });

  it("should return empty string for valid passwords", () => {
    expect(validatePassword("123456")).toBe("");
    expect(validatePassword("password")).toBe("");
    expect(validatePassword("securePassword123!")).toBe("");
  });
});

describe("validateForm", () => {
  it("should return email error when both email and password are invalid", () => {
    expect(validateForm("", "")).toBe("Email is required.");
  });

  it("should return password error when email is valid but password is invalid", () => {
    expect(validateForm("test@test.com", "123")).toBe(
      "Password must be at least 6 characters."
    );
  });

  it("should return email error when email is invalid (regardless of password)", () => {
    expect(validateForm("invalid", "validPassword")).toBe("Email is invalid.");
  });

  it("should return empty string when both email and password are valid", () => {
    expect(validateForm("test@test.com", "validPassword")).toBe("");
  });
});
