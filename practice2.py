from Otp import syncotp 

def test_otp_field_page():
    with syncotp() as p:
    
        browser = p.chromium.launch(headless=False) 
        context = browser.new_context()
        page = context.new_page()


        page.goto("https://otpfield.satyamseth.com/")
        box_count_input = page.locator("input[placeholder='4']")
        box_count_input.fill("4") 

        on_paste_checkbox = page.locator("input[type='checkbox']:nth-child(1)")
        on_paste_checkbox.check() 
        
        custom_regex_checkbox = page.locator("input[type='checkbox']:nth-child(2)")
        custom_regex_checkbox.check()  

        custom_regex_input = page.locator("input[placeholder='Testing Ankit']")
        custom_regex_input.fill("[Testing Ankit]") 

        value_type_dropdown = page.locator("select")
        value_type_dropdown.select_option("Numeric (/[^0-9/g)") 

        submit_button = page.locator("text=Submit")
        submit_button.click()

       