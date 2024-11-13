import { faker } from "@faker-js/faker";
import fs from "fs";

const generateRandomUser = (count) => {
  const users = [];

  for (let index = 0; index < count; index++) {
    const user = {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      company: faker.company.name(),
    };

    users.push(user);
  }

  return users;
};

const generateRandomCategoriesBrand = (count) => {
  const categories = [];
  for (let index = 0; index < count; index++) {
    const category = {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      image: faker.image.url(),
    };

    categories.push(category);
  }

  return categories;
};

const ganerateRandomProductCategoriesBrand = (categories, count) => {
  const products = [];

  for (let index = 0; index < categories.length; index++) {
    const element = categories[index];

    for (let i = 0; i < count; i++) {
      const product = {
        categoryID: element.id,
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        discountPrice: faker.commerce.price(),
        image: faker.image.url(),
        quality: faker.number.int({ max: 10 }),
      };
      products.push(product);
    }
  }

  return products;
};

const ganerateRandomProductCards = (count) => {
  const productCards = [];

  for (let i = 0; i < count; i++) {
    const product = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      image: faker.image.url(),
      discountedPrice: faker.commerce.price(),
      discount: "-23%",
      originalPrice: faker.commerce.price(),
      installment: faker.commerce.price(),
      badge: "Mới ra mắt",
      type: faker.commerce.productName(),
      brand: faker.commerce.productName(),
      shoeType: faker.commerce.productName(),
      codeSP: faker.string.uuid(),
      color: faker.commerce.productName(),
      quantity: "1",
    };
    productCards.push(product);
  }

  return productCards;
};

const ganerateRandomProductCardsImages = (productCards, count) => {
  const images = [];

  for (let index = 0; index < productCards.length; index++) {
    const element = productCards[index];

    for (let i = 0; i < count; i++) {
      const image = {
        productID: element.id,
        id: faker.string.uuid(),
        image: faker.image.url(),
      };
      images.push(image);
    }
  }

  return images;
};

const generateData = () => {
  const users = generateRandomUser(1);
  const categories = generateRandomCategoriesBrand(5);
  const productsCategoriesBrand = ganerateRandomProductCategoriesBrand(
    categories,
    2
  );
  const productCards = ganerateRandomProductCards(10);
  const productsCardImages = ganerateRandomProductCardsImages(productCards, 5);

  const object = {
    users: users,
    categoriesBrand: categories,
    productsCategoriesBrand: productsCategoriesBrand,
    productsCards: productCards,
    productsCardImages: productsCardImages,
  };

  fs.writeFile("db.json", JSON.stringify(object), () => {
    console.log("luu data thanh cong");
  });
};

generateData();
