from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
import htmlmin
import pyperclip




import bs4 as bs
import urllib

sauce = urllib.urlopen('file:////home/mourad/Desktop/selenium/index.html').read()
soup=bs.BeautifulSoup(sauce,'lxml')

options =  webdriver.ChromeOptions()

options.add_argument('headless')
browser =  webdriver.Chrome('./chromedriver')



url_page = 'http://drupal.docker.localhost:8000'

browser.get(url_page + '/user')

login = browser.find_element_by_id("edit-name")
login.clear()
login.send_keys("admin")
password = browser.find_element_by_id("edit-pass")
password.clear()
password.send_keys("admin")
password.send_keys(Keys.RETURN)




l = soup.find_all('section')#.attrs["data-menu-title"]
mylist =[]
for i in l:
	section = i
	section_title   = i.get("data-menu-title")
	section_id      = i.get("id")
	section_class   = i.get("data-menu-title")
	section_order  = i.get("data-order")
	


	browser.get(url_page + '/node/add/monographie')


	monotitle = browser.find_element_by_id("edit-title-0-value")
	monotitle.clear()
	monotitle.send_keys(section_title)

	# monoid = browser.find_element_by_id("edit-field-id-0-value")
	# monoid.clear()
	# monoid.send_keys(section_id)

	# monoclass = browser.find_element_by_id("edit-field-class-0-value")
	# monoclass.clear()
	# monoclass.send_keys(section_class)

	monoorder = browser.find_element_by_id("edit-field-order-0-value")
	monoorder.clear()
	monoorder.send_keys(section_order)




	body = browser.find_element_by_id("edit-field-body-0-value")
	body.clear()

	#browser.execute_script("document.getElementById('edit-field-body-0-value').value = '"+ str(section).decode('utf-8') +"'")
	#var = "document.getElementById('edit-field-body-0-value').value = '"+ str(section).decode('utf-8') + "'" 
	#print var
	#browser.execute_script("document.getElementById('edit-field-body-0-value').value = '"+ str(section).decode('utf-8') + "'" )
	#minified = htmlmin.minify(str(section).decode("utf-8"), remove_empty_space=True)
	#print minified
	#browser.execute_script("document.getElementById('edit-field-body-0-value').value = '"+ minified + "'" )
	
	body.send_keys(str(section).decode('utf-8'))

	#pyperclip.copy(str(section).decode('utf-8'))
	#body.send_keys(Keys.CONTROL, 'v') 
	#pyperclip.copy(str(section).decode('utf-8'))
	
    


	link =  browser.find_element_by_id("edit-submit")
	link.click()


	
	#print(title)
	#mylist.append(title)
	#print("======================================")

	#print(section)
	#print("======================================")
#	print(weight)

#print len(mylist)













