import { faker } from "@faker-js/faker";

function CreateRandomeCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    price: faker.finance.amount({ min: 4000, max: 20000 }),
    mile: "1000",
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    // image:faker.image.transport(640,480,true),
    image:
      "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2019/10/bmw-4-series.jpg",
    geartype: "Automatic",
    year: faker.date.past().getFullYear(),
  };
}

const CarList = faker.helpers.multiple(CreateRandomeCarList, { count: 8 });

export default { CarList };
