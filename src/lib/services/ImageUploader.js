export const ImageUploader = {
  getBase64FromFile(file) {
    let reader = new FileReader();

    return new Promise((accept, fail) => {
      reader.onload = () => accept(reader.result);
      reader.onerror = () => fail(reader.error);
      reader.readAsDataURL(file);
    });
  }
};