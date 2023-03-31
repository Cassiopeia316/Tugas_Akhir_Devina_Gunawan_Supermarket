from jinja2 import Template
import imgkit
import os
dir = os.getcwd()
config = imgkit.config(wkhtmltoimage=dir + '/wkhtmltopdf/bin/wkhtmltoimage.exe')

# Get File Content in String
jinja2_template_string = open("newtemplate.html", 'r').read()
# print (jinja2_template_string)

# Create Template Object
template = Template(jinja2_template_string)

# Render HTML Template String
html_template_string = template.render(name = "John")
print (html_template_string)

options = {
    "width": 296,
    "height": 128,
}

result = imgkit.from_string(html_template_string, 'out.jpg', options=options, config=config)
print (result)