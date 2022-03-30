// PRODUCT

const tag = [
  "mới nhất", // 0
  "phổ biến nhất", // 1
];
const material = [
  "gỗ tự nhiên", // 0
  "gỗ ép", // 1
  "kim loại", // 2
  "kính cường lực", // 3
  "gốm sứ", // 4
  "nhựa", // 5
  "vải", // 6
  "da", // 7
];
const category = [
  "living-room", // 0
  "working-room", // 1
  "bedroom", // 2
  "dining-room", // 3
  "kitchen", // 4
  "sofa", // 5
  "armchair", // 6
  "table", // 7
  "chair", // 8
  "bed", // 9
  "cabinet", // 10
  "shelf", // 11
  "decoration", // 12
  "kitchen-tool", // 13
];

const products = [
  {
    id: 1001,
    name: "Sofa 3 chỗ PENNY – vải màu cam",
    brand: "penny",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 26900000,
    newPrice: 19900000,
    size: "D2400 - R880 - C850",
    material: [2, 5],
    imageUrl: [
      "./src/image/product/1001-sofa-penny-3-cho-vai-cam-1-600x400.jpg",
      "./src/image/product/1001-sofa-penny-3-cho-vai-cam-2-600x400.jpg",
      "./src/image/product/1001-sofa-penny-3-cho-vai-cam-3-600x400.jpg",
      "./src/image/product/1001-sofa-penny-3-cho-vai-cam-4-600x400.jpg",
      "./src/image/product/1001-sofa-penny-3-cho-vai-cam-5-600x400.jpg",
    ],
    description:
      "Sự đơn giản, tinh tế, sang trọng và không kém phần nổi bật của chiếc Sofa mang dòng máu bất diệt Scandivian này với lần lượt các phiên bản màu từ tối tới sáng bật Pastel sẽ mang lại các sắc màu không thể lẫn vào đâu và đa dạng cho từng không gian sống nhà bạn. Thiết kế vuông vức, thanh mảnh nhẹ nhàng là sự pha trộn giữa vững chãi và nhẹ nhàng là tất cả những yếu tố thiết yếu hội tụ ở chiếc sofa này.",
  },
  {
    id: 1002,
    name: "Sofa 3 chỗ PENNY – vải màu xanh lá",
    brand: "penny",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 26900000,
    newPrice: 19900000,
    size: "D2400 - R880 - C850",
    material: [2, 5],
    imageUrl: [
      "./src/image/product/1002-sofa-penny-3-cho-vai-xanh-1-600x400.jpg",
    ],
    description:
      "Sự đơn giản, tinh tế, sang trọng và không kém phần nổi bật của chiếc Sofa mang dòng máu bất diệt Scandivian này với lần lượt các phiên bản màu từ tối tới sáng bật Pastel sẽ mang lại các sắc màu không thể lẫn vào đâu và đa dạng cho từng không gian sống nhà bạn. Thiết kế vuông vức, thanh mảnh nhẹ nhàng là sự pha trộn giữa vững chãi và nhẹ nhàng là tất cả những yếu tố thiết yếu hội tụ ở chiếc sofa này.",
  },
  {
    id: 1003,
    name: "Sofa 3 chỗ PENNY – vải màu tím",
    brand: "penny",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 26900000,
    newPrice: 19900000,
    size: "D2400 - R880 - C850",
    material: [2, 5],
    imageUrl: [
      "./src/image/product/1003-sofa-penny-3-cho-vai-tim-1-600x400.jpg",
      "./src/image/product/1003-sofa-penny-3-cho-vai-tim-2-600x400.jpg",
      "./src/image/product/1003-sofa-penny-3-cho-vai-tim-3-600x400.jpg",
    ],
    description:
      "Sự đơn giản, tinh tế, sang trọng và không kém phần nổi bật của chiếc Sofa mang dòng máu bất diệt Scandivian này với lần lượt các phiên bản màu từ tối tới sáng bật Pastel sẽ mang lại các sắc màu không thể lẫn vào đâu và đa dạng cho từng không gian sống nhà bạn. Thiết kế vuông vức, thanh mảnh nhẹ nhàng là sự pha trộn giữa vững chãi và nhẹ nhàng là tất cả những yếu tố thiết yếu hội tụ ở chiếc sofa này.",
  },
  {
    id: 1004,
    name: "Sofa 3 chỗ PENNY – vải màu xám D2",
    brand: "penny",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 26900000,
    newPrice: 19900000,
    size: "D2400 - R880 - C850",
    material: [2, 5],
    imageUrl: [
      "./src/image/product/1004-sofa-penny-3-cho-vai-xam-hien-dai-1-600x400.jpg",
      "./src/image/product/1004-sofa-penny-3-cho-vai-xam-hien-dai-2-600x400.jpg",
      "./src/image/product/1004-sofa-penny-3-cho-vai-xam-hien-dai-3-600x400.jpg",
    ],
    description:
      "Sự đơn giản, tinh tế, sang trọng và không kém phần nổi bật của chiếc Sofa mang dòng máu bất diệt Scandivian này với lần lượt các phiên bản màu từ tối tới sáng bật Pastel sẽ mang lại các sắc màu không thể lẫn vào đâu và đa dạng cho từng không gian sống nhà bạn. Thiết kế vuông vức, thanh mảnh nhẹ nhàng là sự pha trộn giữa vững chãi và nhẹ nhàng là tất cả những yếu tố thiết yếu hội tụ ở chiếc sofa này.",
  },
  {
    id: 1005,
    name: "Sofa 3 chỗ Elegance màu đen, da Brown R5",
    brand: "elegance",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 124850000,
    newPrice: 99900000,
    size: "D2400 - R880 - C850",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1005-sofa-elegance-mau-den-da-brown-1-600x400.jpg",
      "./src/image/product/1005-sofa-elegance-mau-den-da-brown-2-600x400.jpg",
    ],
    description: "Asshhh cái thằng chớt tiệc này, mày đang làm cái quái gì vậy hả?!",
  },
  {
    id: 1006,
    name: "Sofa 3 chỗ Elegance màu tự nhiên, da cognac",
    brand: "elegance",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 124850000,
    newPrice: 99900000,
    size: "D2250 - R905 - C790",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1006-sofa-elegance-mau-tu-nhien-da-cognac-600x400.jpg",
    ],
    description:
      "Được chế tác từ Gỗ Ash (tần bì) đặc tự nhiên nhập khẩu từ Mỹ và da bò Patrol R1 nhập khẩu Italy",
  },
  {
    id: 1007,
    name: "Sofa 3 chỗ Elegance màu tự nhiên, da xanh",
    brand: "elegance",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 118370000,
    newPrice: 99900000,
    size: "D2250 - R905 - C790",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1007-sofa-elegance-3-cho-mau-tu-nhien-da-xanh-600x400.jpg",
    ],
    description:
      "Được chế tác từ gỗ Ash (tần bì) đặc tự nhiên nhập khẩu từ Mỹ và da bò S4 nhập khẩu Italy",
  },
  {
    id: 1008,
    name: "Sofa 3 chỗ Elegance màu tự nhiên, vải xanh",
    brand: "elegance",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 85970000,
    newPrice: 69900000,
    size: "D2250 - R905 - C790",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1008-sofa-elegance-3-cho-mau-tu-nhien-vai-xanh-600x400.jpg",
    ],
    description:
      "Được chế tác từ gỗ Ash (tần bì) đặc tự nhiên nhập khẩu từ Mỹ và vải cao cấp",
  },
  {
    id: 1009,
    name: "Sofa Bridge 3 chỗ hiện đại da Beige",
    brand: "bridge",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 109890000,
    newPrice: 89900000,
    size: "D2100 - R900 - C750",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1009-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-kem-1-600x400.jpg",
      "./src/image/product/1009-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-kem-2-600x400.jpg",
      "./src/image/product/1009-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-kem-3-600x400.jpg",
      "./src/image/product/1009-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-kem-4-600x400.jpg",
    ],
    description:
      "Sofa Bridge 3 chỗ với thiết kế vượt thời gian, sử dụng chất liệu gỗ sồi đặc và da bò tự nhiên, sofa Bridge là điểm nhấn đẳng cấp trong phòng khách của bạn. Đặc biệt, phần tay vịn được hoàn thiện vô cùng tinh xảo kết hợp với kết cấu vô cùng chắn chắn giúp cho sofa Bridge tạo cảm xúc gần gũi, tự nhiên và thoái mái khi sử dụng. Sản phẩm có các màu sắc hoàn thiện gỗ sồi sáng và trầm và nhiều màu da khác nhau để lựa chọn. Sofa Bridge 3 chỗ là 1 lựa chọn sáng gia cho phong cách nội thất Bắc Âu.",
  },
  {
    id: 1010,
    name: "Sofa Bridge 3 chỗ hiện đại da cognac",
    brand: "bridge",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 109890000,
    newPrice: 89900000,
    size: "D2100 - R900 - C750",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1010-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-nau-1-600x400.jpg",
      "./src/image/product/1010-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-nau-2-600x400.jpg",
      "./src/image/product/1010-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-nau-3-600x400.jpg",
      "./src/image/product/1010-sofa-bridge-khung-go-soi-boc-da-bo-cao-cap-sang-trong-mau-nau-4-600x400.jpg",
    ],
    description:
      "Sofa Bridge 3 chỗ với thiết kế vượt thời gian, sử dụng chất liệu gỗ sồi đặc và da bò tự nhiên, sofa Bridge là điểm nhấn đẳng cấp trong phòng khách của bạn. Đặc biệt, phần tay vịn được hoàn thiện vô cùng tinh xảo kết hợp với kết cấu vô cùng chắn chắn giúp cho sofa Bridge tạo cảm xúc gần gũi, tự nhiên và thoái mái khi sử dụng. Sản phẩm có các màu sắc hoàn thiện gỗ sồi sáng và trầm và nhiều màu da khác nhau để lựa chọn. Sofa Bridge 3 chỗ là 1 lựa chọn sáng gia cho phong cách nội thất Bắc Âu.",
  },
  {
    id: 1011,
    name: "Sofa Jazz 3 chỗ hiện đại da cognac",
    brand: "jazz",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 58810000,
    newPrice: 49900000,
    size: "D2300 - R840 - C760",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-1-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-2-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-3-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-4-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-5-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-6-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-7-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-8-600x400.jpg",
      "./src/image/product/1011-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-nau-9-600x400.jpg",
    ],
    description:
      "Sofa Jazz 3 chổ được bao bọc bởi lớp da bò cao cấp đem lại cảm giác mềm mại, êm ái, thư giãn tuyệt vời. Thiết kế hiện đại mang nét đẹp độc đáo từ hình khối thanh lịch, đường nét tinh tế là điểm cộng lớn nhất của sofa Jazz.",
  },
  {
    id: 1012,
    name: "Sofa Jazz 3 chỗ hiện đại da nâu (sẫm)",
    brand: "jazz",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 58810000,
    newPrice: 49900000,
    size: "D2300 - R840 - C760",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1012-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-den-1-600x400.jpg",
      "./src/image/product/1012-sofa-jazz-3-cho-hien-dai-da-that-chan-kim-loai-mau-den-2-600x400.jpg",
    ],
    description:
      "Sofa Jazz 3 chổ được bao bọc bởi lớp da bò cao cấp đem lại cảm giác mềm mại, êm ái, thư giãn tuyệt vời. Thiết kế hiện đại mang nét đẹp độc đáo từ hình khối thanh lịch, đường nét tinh tế là điểm cộng lớn nhất của sofa Jazz.",
  },
  {
    id: 1013,
    name: "Sofa góc trái Rap hiện đại vải vàng",
    brand: "rap",
    tag: [0, 1],
    category: [0, 5],
    oldPrice: 29360000,
    newPrice: 26900000,
    size: "D2530/1760- R850- C700",
    material: [7, 0],
    imageUrl: [
      "./src/image/product/1101-sofa-goc-rap-boc-vai-vang-600x400.jpg",
    ],
    description:
      "Sofa góc phải Rap với phần nệm ngồi êm ái, chân sofa sử dụng kim loại bóng sáng không rỉ tạo sự sang trọng. Sofa góc Rap là 1 lựa chọn tối ưu cho không gian phòng khách hiện đại, tiện nghi cho cả gia đình.",
  },
];


// BANNER
const stylishs = [
  {
      id: 1,
      title: "Minimalism",
      subtitle: "Đơn giản là đẹp",
      description: "Sự thừa thãi được cho là không cần thiết đối với phong cách này. Minimalism chủ yếu sử dụng những đường nét đơn giản, những đồ dùng nội thất gọn gàng. Màu sắc sử dụng trong phong cách thiết kế nội thất này chủ yếu là màu trung tính, có không quá ba màu trong không gian nội thất theo phong cách này: một màu nền, một màu chủ đạo và một màu nhấn. và thường sử dụng những khối hình học đa dạng như hình vuông, hình chữ nhật, hình tròn…",
      imageUrl: "./src/image/stylish/minimalism.jpg"
  },
  {
      id: 2,
      title: "Classic",
      subtitle: "Cổ điển mang lại sự sang trọng",
      description: "Đây là phong cách đứng thứ hai trong top 10 phong cách thiết kế nội thất phổ biến nhất thế giới. Những kiến trúc cổ điển đặc trưng với những đường cong hoàn hảo. Màu sắc nhã nhặn và cao quý mang hơi hướng hoàng gia cũng giúp phong cách này trở nên sang trọng",
      imageUrl: "./src/image/stylish/classic.jpg"
  },
  {
      id: 3,
      title: "Rustic",
      subtitle: "Sống xanh cùng thiên nhiên",
      description: "Đây là kiểu hình kiến trúc nội thất hòa nhập với thiên nhiên. Những đồ dùng nội thất mộc mạc, thô sơ hay những bức tường bằng gạch thô hoặc đá tự nhiên mang đến nét độc đáo cho thiết kế này, vừa định hình không gian kiến trúc vừa cho thấy sự gắn kết với thiên nhiên trong nhà.",
      imageUrl: "./src/image/stylish/rustic.jpg"
  },
  {
      id: 4,
      title: "Modern",
      subtitle: "Dẫn đầu xu thế",
      description: "Phong cách hiện đại tập trung vào những chi tiết, những hình dáng đường nét đơn giản. Trong phong cách thiết kế nội thất hiện đại, các kiến trúc sư chủ yếu chú trọng vào việc tạo ra công năng sử dụng. Mang đến một không gian thoải mái, tiện nghi và đầy đủ công năng. ",
      imageUrl: "./src/image/stylish/modern.jpg"
  },
  {
      id: 5,
      title: "Hitech",
      subtitle: "Nắm bắt xu hướng của tương lai",
      description: "Những kim loại sáng bóng hay những mặt kính tạo nên nét độc đáo trong phong cách này. Ở đây những vật liệu nhân tạo được chú trọng sử dụng để tạo nên một không gian nội thất mới mẻ trên mặt bằng phẳng, ít chi tiết.",
      imageUrl: "./src/image/stylish/hitech.jpg"
  },
  {
      id: 6,
      title: "Elegant country",
      subtitle: "Nhẹ nhàng & lãng mạn",
      description: "Phong cách đồng quê chịu ảnh hưởng rất lớn từ những quốc gia lớn như Mỹ, Anh, Pháp,… Những thiết kế theo phong cách này thường có những họa tiết thanh lịch, lãng mạn như hoa, cỏ… Những màu sắc sử dụng trong phong cách này thường là màu pastel ngọt ngào với bề mặt được sơn hoặc phủ một lớp gỉ nhẹ.",
      imageUrl: "./src/image/stylish/elegant-country.jpg"
  },
  {
      id: 7,
      title: "Retro",
      subtitle: "Hoài niệm những thiết kế sang trọng",
      description: "Đây là những thiết kế nội thất theo kiểu thập niên 50, 60 của thế kỷ trước. Những màu sắc vui tươi, hài hước và màu sắc nổi bật đã làm nên đặc trưng của phong cách hoàn hảo này. ",
      imageUrl: "./src/image/stylish/retro.jpg"
  },
  {
      id: 8,
      title: "Maverick",
      subtitle: "Độc mà lạ",
      description: "Đây là một phong cách thiết kế sáng tạo, độc đáo và trẻ trung. Với phong cách maverick bạn không cần phải tuân theo bất cứ một quy tắc nào. Những thiết kế theo phong cách này thường có cấu trúc chồng chéo nhau, phối màu ngẫu nhiên ngay cả trong cùng một phòng.",
      imageUrl: "./src/image/stylish/maverick.jpg"
  },
  {
      id: 9,
      title: "Scandinavian",
      subtitle: "Phong cách kiến trúc Bắc Âu",
      description: "Đây là phong cách đang phát triển rất mạnh mẽ tại Việt Nam trong những năm gần đây. Phong cách này thể hiện sự sang trọng và tinh tế qua những màu sắc trung tính mà nổi bật nhất chính là màu sắc sáng trắng, màu nâu hay màu kem. Mặc dù đơn giản trong thiết kế, nhưng các đường nét thường được kết hợp với sự sang trọng kín đáo và ấm áp, đã tạo nên một cảm giác rất giản dị, phù hợp với những căn hộ nhỏ cần tạo không gian thoáng đãng.",
      imageUrl: "./src/image/stylish/scandinavian.jpg"
  }
]