import re

def check_password_strength(password):
    score = 0
    feedback = []

    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Password should be at least 8 characters long.")

    if re.search(r"[A-Z]", password):
        score += 1
    else:
        feedback.append("Include at least one uppercase letter.")

    if re.search(r"[a-z]", password):
        score += 1
    else:
        feedback.append("Include at least one lowercase letter.")

    if re.search(r"[0-9]", password):
        score += 1
    else:
        feedback.append("Include at least one number.")

    if re.search(r"[^A-Za-z0-9]", password):
        score += 1
    else:
        feedback.append("Include at least one special character.")

    strength_levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"]
    print(f"\nPassword Strength: {strength_levels[score - 1] if score > 0 else 'Too short'}")

    if feedback:
        print("Suggestions:")
        for f in feedback:
            print(f"- {f}")

if __name__ == "__main__":
    user_input = input("Enter a password to check its strength: ")
    check_password_strength(user_input)
