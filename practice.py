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