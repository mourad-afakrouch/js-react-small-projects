from bs4 import BeautifulSoup
import re

html = """<p class="description" src='./images' dir="ltr">Name is a fine man. <br></p>"""
soup = BeautifulSoup(html)
target = soup.find_all('src',text=re.compile(r'./images'))
for v in target:
    v.replace_with(v.replace('./images','sites/default/'))
print soup