# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

# from selenium.webdriver.common.by import By
# from selenium.common.exceptions import TimeoutException
import htmlmin
import pyperclip

import re


import bs4 as bs
import urllib

sauce = urllib.urlopen('file:////home/mourad/Desktop/Untitled/index.html').read()
soup=bs.BeautifulSoup(sauce,'lxml')

# options =  webdriver.ChromeOptions()

# options.add_argument('headless')
# browser =  webdriver.Chrome('./chromedriver')



# url_page = 'http://192.168.1.164:8000'

# browser.get(url_page + '/user')

# login = browser.find_element_by_id("edit-name")
# login.clear()
# login.send_keys("admin")
# password = browser.find_element_by_id("edit-pass")
# password.clear()
# password.send_keys("admin")
# password.send_keys(Keys.RETURN)




# l = soup.find_all('section')


l = soup.find_all('img')

for i in l:
	section = i
	# section_title   = i.get("data-menu-title")
	# section_id      = i.get("id")
	# section_class   = i.get("data-menu-title")
	# section_order   = i.get("data-order")
	print i
	


	# browser.get(url_page + '/node/add/e_data')


	# monotitle = browser.find_element_by_id("edit-title-0-value")
	# monotitle.clear()
	# monotitle.send_keys(section_title)

	# monoid = browser.find_element_by_id("edit-field-id-0-value")
	# monoid.clear()
	# monoid.send_keys(section_id)


	# monoorder = browser.find_element_by_id("edit-field-order-0-value")
	# monoorder.clear()
	# monoorder.send_keys(section_order)




	# body = browser.find_element_by_id("edit-body-0-value")
	# body.clear()

	
	# body.send_keys(str(section).decode('utf-8'))

    


	# link =  browser.find_element_by_id("edit-submit")
	# link.click()


	












