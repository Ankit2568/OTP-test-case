from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome("https://www.google.co.in/")
driver.maximize_window()

# Open OTP field site
driver.get("https://otpfield.satyamseth.com/")


def clear_otp_fields(otp_fields):
    for field in otp_fields:
        field.clear()

def enter_otp(otp_fields, otp):
    for i, digit in enumerate(otp):
        otp_fields[i].send_keys(digit)

# Test Cases
try:
    # Test 1: Verify page loads correctly
    assert "OTP Field" in driver.title, "Page title is incorrect"
    print("Page loaded successfully.")

    # Test 2: OTP input fields are visible
    otp_fields = driver.find_elements(By.CSS_SELECTOR, "input[type='text']")
    assert len(otp_fields) > 0, "OTP input fields not found"
    print(f"{len(otp_fields)} OTP fields found.")

    # Test 3: Validate single-digit input
    otp_fields[0].send_keys("a")
    assert otp_fields[0].get_attribute("value") == "", "Invalid character accepted"
    otp_fields[0].clear()  # Clear field before entering a digit
    otp_fields[0].send_keys("1")
    assert otp_fields[0].get_attribute("value") == "1", "Valid digit not accepted"

    # Test 4: Auto-focus behavior
    otp_fields[0].send_keys("2")
    assert otp_fields[1] == driver.switch_to.active_element, "Auto-focus failed"
    
    # Test 5: Backspace behavior
    otp_fields[1].send_keys(Keys.BACKSPACE)
    assert otp_fields[0] == driver.switch_to.active_element, "Backspace focus failed"
    
    # Test 6: Complete OTP input
    clear_otp_fields(otp_fields)
    enter_otp(otp_fields, "1234")
    assert "".join([field.get_attribute("value") for field in otp_fields]) == "1234", "OTP entry failed"

    # Test 7: Clipboard paste behavior
    clear_otp_fields(otp_fields)
    otp_fields[0].send_keys("5678")
    assert "".join([field.get_attribute("value") for field in otp_fields]) == "5678", "Clipboard paste failed"

    # Test 8: Invalid OTP submission
    try:
        submit_button = driver.find_element(By.CSS_SELECTOR, "button")  # Adjust selector
        submit_button.click()
        time.sleep(2)  # Wait for error message (adjust as needed)
        error_message = driver.find_element(By.CSS_SELECTOR, ".error").text  # Adjust selector
        assert "Invalid OTP" in error_message, "Error message not displayed for invalid OTP"
        print("Error message displayed correctly for invalid OTP.")
    except Exception as e:
        print("No submit button or error message handling encountered:", str(e))

    print("All test cases passed!")

finally:
    # Close the browser
    driver.quit()
