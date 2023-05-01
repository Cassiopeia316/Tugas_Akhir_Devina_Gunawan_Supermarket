import cv2
import numpy as np

image = cv2.imread('./landingpage.png')
image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
image = cv2.resize(image, (296, 128))
# image = np.abs(image - 255)
# cv2.imshow('Gray image', image)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

z = []
i = 0
print(image.shape)
w, h = image.shape
a = []
q = []

string = ""
for x in range(h):
    for y in range(w - 1, -1, -1):
        if image[y, x] > 127: #127-255 putih, 0-126 hitam
            string += "0" #putih
        else:
            string += "1" #hitam
        
        if (len(string) == 8): #dikumpulin sampai 8 digit, terus mau dijadiin hexdesimal
            hexdecimal = hex(int(string, 2)).upper()
            a.append(hexdecimal) #buat debungging
            q.append(hexdecimal) #hasil yang mau di print e paper
            string = ""
        if (len(a) == 16):
            z.append(a)
            a = []
            
    # print()
for i, x in enumerate(z):
    print(i, x)
    
print(len(q))

f = open("generated.txt", "a")
n = 0
for i in q:
    f.write(i + ",")
    n += 1
    if n == 16:
        f.write("\n")
        n = 0
f.close()