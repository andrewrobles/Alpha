from PIL import Image
import os

image = Image.open('image.jpg')

width, height = image.size
new_size = (width//2, height//2)
resized_image = image.resize(new_size)

resized_image.save('favicon.ico', optimize=True, quality=1)

original_size = os.path.getsize('image.jpg')
compressed_size = os.path.getsize('favicon.ico')

print("Original Size: ", original_size)
print("Compressed Size: ", compressed_size)
