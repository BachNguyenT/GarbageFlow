from flask import Flask, request
import base64
from io import BytesIO
from PIL import Image
import torch
import torchvision.transforms as transforms

app = Flask(__name__)
model = torch.load('my_model.pt',
                   map_location=torch.device('cpu'))
model.eval()
transform = transforms.Compose([
    transforms.Resize(224),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

@app.route('/predict', methods=['POST'])
def predict():

    input_image = request.files['file']

    image = Image.open(BytesIO(base64.b64decode(input_image)))
    processed_image = transform(image).unsqueeze(0)

    with torch.no_grad():
        output = model(processed_image)
        predictions = torch.softmax(output, dim=1).squeeze(0)

    return {'predictions': predictions.tolist()}
