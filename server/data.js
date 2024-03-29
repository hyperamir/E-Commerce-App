import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Amir',
      email: 'amir@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: true
    },
    {
      name: 'Joe',
      email: 'a@a.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpeg', 
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 2.0,
      numReviews: 6,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 3,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 18,
      description: 'high quality product',
    },
  ],
};
export default data;