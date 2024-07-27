import cv2
from datetime import datetime

print("entered script")

# Replace with your camera index (e.g., 0 for primary camera)
camera_index = 0

def capture_image():
    print("Attempting to open camera...")
    cap = cv2.VideoCapture(camera_index)

    if not cap.isOpened():
        print("Error opening camera")
        return

    print("Camera opened successfully")
    ret, frame = cap.read()

    if ret:
        datetime_str = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        filename = f"intruder_image_{datetime_str}.jpg"
        
        cv2.imwrite(filename, frame)
        print(f"Image captured and saved as {filename}!")
    else:
        print("Failed to capture image")

    cap.release()
    cv2.destroyAllWindows()

capture_image()
