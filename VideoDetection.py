import cv2

# Replace with your camera index (e.g., 0 for primary camera)
camera_index = 0

def capture_image():
  cap = cv2.VideoCapture(camera_index)

  if not cap.isOpened():
    print("Error opening camera")
    return

  ret, frame = cap.read()

  if ret:
    cv2.imwrite("intruder_image.jpg", frame)
    print("Image captured!")
  else:
    print("Failed to capture image")

  cap.release()
  cv2.destroyAllWindows()

capture_image()
