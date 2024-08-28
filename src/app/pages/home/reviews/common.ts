interface IReview {
  img: string;
  comment: string;
  reviewer: string;
  numReview: number;
}

interface IReview {
  img: string;
  comment: string;
  reviewer: string;
  numReview: number;
}

export const reviews: IReview[] = [
  {
    img: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
    comment:
      "The experience was fantastic! The property exceeded my expectations, and I can't wait to return. Absolutely loved the atmosphere and the attention to detail. The service was top-notch.",
    reviewer: 'Jane Doe',
    numReview: 5,
  },
  {
    img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    comment:
      'A beautiful place with stunning views. The service was top-notch, and the stay was incredibly comfortable.',
    reviewer: 'John Smith',
    numReview: 4,
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    comment:
      'Good experience overall, but the room could have been cleaner. The location, however, was perfect!',
    reviewer: 'David Johnson',
    numReview: 4.5,
  },
  {
    img: 'https://d3i6fh83elv35t.cloudfront.net/static/2022/03/alsan_2021_hi-res-download_1-1024x683.jpg',
    comment:
      'Absolutely loved the atmosphere and the attention to detail. Highly recommended! Good experience overall, but the room could have been cleaner.',
    reviewer: 'Emily Clark',
    numReview: 5,
  },
];
