import { CurriculumLevel } from '../types';

const SM_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/superminds_';

export const sm2Data: CurriculumLevel = {
    level: 3, // Updated to Level 3 for Primary School - Grade 3
    title: { en: 'Super Minds 2', vi: 'Super Minds 2' },
    subtitle: { en: 'Primary School - Grade 3', vi: 'Tiểu học - Lớp 3' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1FrJIjWL7T39vqqb_1EXt_YGD5Z21Heyt/view?usp=drive_link', // Placeholder, replace with actual SM2 PDF if available
    units: [
        {
            id: 1,
            title: { en: 'Unit 1: Friends', vi: 'Bài 1: Bạn bè' },
            lessons: [
                {
                    id: 60101,
                    title: { en: 'Teamwork and Sports', vi: 'Làm việc nhóm và Thể thao' },
                    aims: {
                        en: ['Talk about sports and teamwork.', 'Express abilities and inabilities.'],
                        vi: ['Nói về thể thao và làm việc nhóm.', 'Diễn tả khả năng và không khả năng.']
                    },
                    vocabulary: [
                        { term: 'football', pronunciation: '/ˈfʊtbɔl/', vietnamese: 'bóng đá', imageUrl: `${SM_BASE}football.png` },
                        { term: 'tennis', pronunciation: '/ˈtɛnɪs/', vietnamese: 'quần vợt', imageUrl: `${SM_BASE}tennis.png` },
                        { term: 'team', pronunciation: '/tim/', vietnamese: 'đội', imageUrl: `${SM_BASE}team.png` },
                        { term: 'score a goal', pronunciation: '/skɔr ə ɡoʊl/', vietnamese: 'ghi bàn' },
                        { term: 'win', pronunciation: '/wɪn/', vietnamese: 'thắng' },
                        { term: 'lose', pronunciation: '/luz/', vietnamese: 'thua' },
                        { term: 'basketball', pronunciation: '/ˈbæskɪtbɔːl/', vietnamese: 'bóng rổ' },
                        { term: 'swimming', pronunciation: '/ˈswɪmɪŋ/', vietnamese: 'bơi lội' },
                        { term: 'cycling', pronunciation: '/ˈsaɪklɪŋ/', vietnamese: 'đạp xe' },
                        { term: 'volleyball', pronunciation: '/ˈvɑːlibɔːl/', vietnamese: 'bóng chuyền' },
                        { term: 'player', pronunciation: '/ˈpleɪər/', vietnamese: 'cầu thủ' },
                    ],
                    grammar: [
                        { title: { en: 'Can / Can\'t for ability', vi: 'Can / Can\'t cho khả năng' }, explanation: { en: ["Use 'Can you play (football)? Yes, I can. / No, I can't.'", "Use 'He/She can (swim). He/She can't (fly).'", "Use 'What can you do?'"], vi: ['Sử dụng "Bạn có thể chơi (bóng đá) không? Vâng, tôi có thể. / Không, tôi không thể."', 'Sử dụng "Anh ấy/Cô ấy có thể (bơi). Anh ấy/Cô ấy không thể (bay)."', 'Sử dụng "Bạn có thể làm gì?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Discuss favorite sports.', 'Role-play a sports game scenario.'], vi: ['Thảo luận về các môn thể thao yêu thích.', 'Đóng vai một kịch bản trận đấu thể thao.'] } }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: { en: 'Unit 2: The market', vi: 'Bài 2: Chợ' },
            lessons: [
                {
                    id: 60201,
                    title: { en: 'Food and Shopping', vi: 'Thức ăn và Mua sắm' },
                    aims: {
                        en: ['Identify various food items.', 'Ask and answer about quantities.', 'Practice shopping dialogues.'],
                        vi: ['Nhận biết các loại thực phẩm khác nhau.', 'Hỏi và trả lời về số lượng.', 'Thực hành hội thoại mua sắm.']
                    },
                    vocabulary: [
                        { term: 'bread', pronunciation: '/brɛd/', vietnamese: 'bánh mì', imageUrl: `${SM_BASE}bread.png` },
                        { term: 'cheese', pronunciation: '/tʃiz/', vietnamese: 'phô mai', imageUrl: `${SM_BASE}cheese.png` },
                        { term: 'eggs', pronunciation: '/ɛɡz/', vietnamese: 'trứng', imageUrl: `${SM_BASE}eggs.png` },
                        { term: 'milk', pronunciation: '/mɪlk/', vietnamese: 'sữa', imageUrl: `${SM_BASE}milk.png` },
                        { term: 'chicken', pronunciation: '/ˈtʃɪkɪn/', vietnamese: 'thịt gà', imageUrl: `${SM_BASE}chicken.png` },
                        { term: 'fish', pronunciation: '/fɪʃ/', vietnamese: 'cá', imageUrl: `${SM_BASE}fish.png` },
                        { term: 'rice', pronunciation: '/raɪs/', vietnamese: 'gạo', imageUrl: `${SM_BASE}rice.png` },
                        { term: 'apples', pronunciation: '/ˈæpəlz/', vietnamese: 'táo' },
                        { term: 'bananas', pronunciation: '/bəˈnænəz/', vietnamese: 'chuối' },
                        { term: 'carrots', pronunciation: '/ˈkærəts/', vietnamese: 'cà rốt' },
                        { term: 'tomatoes', pronunciation: '/təˈmeɪtoʊz/', vietnamese: 'cà chua' },
                        { term: 'potatoes', pronunciation: '/pəˈteɪtoʊz/', vietnamese: 'khoai tây' },
                        { term: 'water', pronunciation: '/ˈwɔːtər/', vietnamese: 'nước' },
                    ],
                    grammar: [
                        { title: { en: 'Countable and Uncountable Nouns', vi: 'Danh từ đếm được và không đếm được' }, explanation: { en: ["Use 'How much (milk)?' for uncountable nouns.", "Use 'How many (eggs)?' for countable nouns.", "Use 'some' and 'any' for quantities."], vi: ['Sử dụng "Bao nhiêu (sữa)?" cho danh từ không đếm được.', 'Sử dụng "Bao nhiêu (trứng)?" cho danh từ đếm được.', 'Sử dụng "some" và "any" cho số lượng.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Role-play a shopping trip to the market.', 'Make a shopping list.'], vi: ['Đóng vai đi chợ.', 'Lập danh sách mua sắm.'] } }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: { en: 'Unit 3: At the beach', vi: 'Bài 3: Ở bãi biển' },
            lessons: [
                {
                    id: 60301,
                    title: { en: 'Beach activities and weather', vi: 'Hoạt động bãi biển và thời tiết' },
                    aims: {
                        en: ['Talk about beach activities.', 'Describe weather conditions.', 'Use adjectives to describe things.'],
                        vi: ['Nói về các hoạt động ở bãi biển.', 'Mô tả điều kiện thời tiết.', 'Sử dụng tính từ để mô tả sự vật.']
                    },
                    vocabulary: [
                        { term: 'sunny', pronunciation: '/ˈsʌni/', vietnamese: 'nắng', imageUrl: `${SM_BASE}sunny.png` },
                        { term: 'cloudy', pronunciation: '/ˈklaʊdi/', vietnamese: 'nhiều mây', imageUrl: `${SM_BASE}cloudy.png` },
                        { term: 'rainy', pronunciation: '/ˈreɪni/', vietnamese: 'mưa', imageUrl: `${SM_BASE}rainy.png` },
                        { term: 'windy', pronunciation: '/ˈwɪndi/', vietnamese: 'gió', imageUrl: `${SM_BASE}windy.png` },
                        { term: 'hot', pronunciation: '/hɑt/', vietnamese: 'nóng' },
                        { term: 'cold', pronunciation: '/koʊld/', vietnamese: 'lạnh' },
                        { term: 'swim', pronunciation: '/swɪm/', vietnamese: 'bơi', imageUrl: `${SM_BASE}swim.png` },
                        { term: 'build a sandcastle', pronunciation: '/bɪld ə ˈsændˌkæsəl/', vietnamese: 'xây lâu đài cát', imageUrl: `${SM_BASE}sandcastle.png` },
                        { term: 'sun', pronunciation: '/sʌn/', vietnamese: 'mặt trời' },
                        { term: 'sand', pronunciation: '/sænd/', vietnamese: 'cát' },
                        { term: 'sea', pronunciation: '/siː/', vietnamese: 'biển' },
                        { term: 'shell', pronunciation: '/ʃɛl/', vietnamese: 'vỏ sò' },
                        { term: 'umbrella', pronunciation: '/ʌmˈbrɛlə/', vietnamese: 'cái ô' },
                        { term: 'towel', pronunciation: '/ˈtaʊəl/', vietnamese: 'khăn tắm' },
                    ],
                    grammar: [
                        { title: { en: 'Adjectives', vi: 'Tính từ' }, explanation: { en: ["Use adjectives to describe nouns. 'It's a sunny day.'", "Use 'What's the weather like?'"], vi: ['Sử dụng tính từ để mô tả danh từ. "Hôm nay là một ngày nắng."', 'Sử dụng "Thời tiết thế nào?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Describe a perfect beach day.', 'Draw and describe your favorite weather.'], vi: ['Mô tả một ngày biển hoàn hảo.', 'Vẽ và mô tả thời tiết yêu thích của bạn.'] } }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: { en: 'Unit 4: At the park', vi: 'Bài 4: Ở công viên' },
            lessons: [
                {
                    id: 60401,
                    title: { en: 'Park activities and nature', vi: 'Hoạt động công viên và thiên nhiên' },
                    aims: {
                        en: ['Talk about activities in the park.', 'Identify elements of nature.', 'Use prepositions of movement.'],
                        vi: ['Nói về các hoạt động trong công viên.', 'Nhận biết các yếu tố tự nhiên.', 'Sử dụng giới từ chỉ sự chuyển động.']
                    },
                    vocabulary: [
                        { term: 'tree', pronunciation: '/tri/', vietnamese: 'cây', imageUrl: `${SM_BASE}tree.png` },
                        { term: 'flower', pronunciation: '/ˈflaʊər/', vietnamese: 'hoa', imageUrl: `${SM_BASE}flower.png` },
                        { term: 'bird', pronunciation: '/bɜrd/', vietnamese: 'chim', imageUrl: `${SM_BASE}bird.png` },
                        { term: 'swing', pronunciation: '/swɪŋ/', vietnamese: 'xích đu', imageUrl: `${SM_BASE}swing.png` },
                        { term: 'slide', pronunciation: '/slaɪd/', vietnamese: 'cầu trượt', imageUrl: `${SM_BASE}slide.png` },
                        { term: 'run', pronunciation: '/rʌn/', vietnamese: 'chạy', imageUrl: `${SM_BASE}run.png` },
                        { term: 'jump', pronunciation: '/dʒʌmp/', vietnamese: 'nhảy', imageUrl: `${SM_BASE}jump.png` },
                        { term: 'bench', pronunciation: '/bɛntʃ/', vietnamese: 'ghế dài' },
                        { term: 'fountain', pronunciation: '/ˈfaʊntən/', vietnamese: 'đài phun nước' },
                        { term: 'pond', pronunciation: '/pɑːnd/', vietnamese: 'ao' },
                        { term: 'path', pronunciation: '/pæθ/', vietnamese: 'con đường' },
                        { term: 'grass', pronunciation: '/ɡræs/', vietnamese: 'cỏ' },
                    ],
                    grammar: [
                        { title: { en: 'Prepositions of movement', vi: 'Giới từ chỉ sự chuyển động' }, explanation: { en: ["Use 'up', 'down', 'through', 'over' to describe movement.", "Example: The bird is flying over the tree."], vi: ['Sử dụng "lên", "xuống", "xuyên qua", "qua" để mô tả sự chuyển động.', 'Ví dụ: Con chim đang bay qua cái cây.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Describe what people are doing in a park picture.', 'Create a story about an adventure in the park.'], vi: ['Mô tả những gì mọi người đang làm trong một bức tranh công viên.', 'Tạo một câu chuyện về một cuộc phiêu lưu trong công viên.'] } }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: { en: 'Unit 5: At the zoo', vi: 'Bài 5: Ở sở thú' },
            lessons: [
                {
                    id: 60501,
                    title: { en: 'Zoo animals and habitats', vi: 'Động vật sở thú và môi trường sống' },
                    aims: {
                        en: ['Identify and name zoo animals.', 'Talk about animal characteristics and habitats.'],
                        vi: ['Nhận biết và gọi tên động vật sở thú.', 'Nói về đặc điểm và môi trường sống của động vật.']
                    },
                    vocabulary: [
                        { term: 'lion', pronunciation: '/ˈlaɪən/', vietnamese: 'sư tử', imageUrl: `${SM_BASE}lion.png` },
                        { term: 'tiger', pronunciation: '/ˈtaɪɡər/', vietnamese: 'hổ', imageUrl: `${SM_BASE}tiger.png` },
                        { term: 'elephant', pronunciation: '/ˈɛləfənt/', vietnamese: 'voi', imageUrl: `${SM_BASE}elephant.png` },
                        { term: 'monkey', pronunciation: '/ˈmʌŋki/', vietnamese: 'khỉ', imageUrl: `${SM_BASE}monkey.png` },
                        { term: 'zebra', pronunciation: '/ˈzibrə/', vietnamese: 'ngựa vằn', imageUrl: `${SM_BASE}zebra.png` },
                        { term: 'giraffe', pronunciation: '/dʒɪˈræf/', vietnamese: 'hươu cao cổ', imageUrl: `${SM_BASE}giraffe.png` },
                        { term: 'penguin', pronunciation: '/ˈpɛŋɡwɪn/', vietnamese: 'chim cánh cụt' },
                        { term: 'snake', pronunciation: '/sneɪk/', vietnamese: 'rắn' },
                        { term: 'bear', pronunciation: '/bɛər/', vietnamese: 'gấu' },
                        { term: 'hippo', pronunciation: '/ˈhɪpoʊ/', vietnamese: 'hà mã' },
                        { term: 'kangaroo', pronunciation: '/ˌkæŋɡəˈruː/', vietnamese: 'chuột túi' },
                    ],
                    grammar: [
                        { title: { en: 'Describing animals', vi: 'Mô tả động vật' }, explanation: { en: ["Use 'It has (long neck).' or 'They have (stripes).'", "Use 'It can (run fast).'", "Ask 'What does it look like?'"], vi: ['Sử dụng "Nó có (cổ dài)." hoặc "Chúng có (sọc)."', 'Sử dụng "Nó có thể (chạy nhanh)."', 'Hỏi "Nó trông như thế nào?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Match animals to their habitats.', 'Create a fact file for an animal.'], vi: ['Nối động vật với môi trường sống của chúng.', 'Tạo một hồ sơ thông tin về một con vật.'] } }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: { en: 'Unit 6: Jobs', vi: 'Bài 6: Nghề nghiệp' },
            lessons: [
                {
                    id: 60601,
                    title: { en: 'Professions and daily tasks', vi: 'Nghề nghiệp và công việc hàng ngày' },
                    aims: {
                        en: ['Identify and name different professions.', 'Talk about daily tasks associated with jobs.'],
                        vi: ['Nhận biết và gọi tên các nghề nghiệp khác nhau.', 'Nói về các công việc hàng ngày liên quan đến nghề nghiệp.']
                    },
                    vocabulary: [
                        { term: 'teacher', pronunciation: '/ˈtitʃər/', vietnamese: 'giáo viên', imageUrl: `${SM_BASE}teacher.png` },
                        { term: 'doctor', pronunciation: '/ˈdɑktər/', vietnamese: 'bác sĩ', imageUrl: `${SM_BASE}doctor.png` },
                        { term: 'firefighter', pronunciation: '/ˈfaɪərˌfaɪtər/', vietnamese: 'lính cứu hỏa', imageUrl: `${SM_BASE}firefighter.png` },
                        { term: 'police officer', pronunciation: '/pəˈlis ˈɔfɪsər/', vietnamese: 'cảnh sát', imageUrl: `${SM_BASE}police_officer.png` },
                        { term: 'chef', pronunciation: '/ʃɛf/', vietnamese: 'đầu bếp', imageUrl: `${SM_BASE}chef.png` },
                        { term: 'pilot', pronunciation: '/ˈpaɪlət/', vietnamese: 'phi công', imageUrl: `${SM_BASE}pilot.png` },
                        { term: 'nurse', pronunciation: '/nɜːrs/', vietnamese: 'y tá' },
                        { term: 'farmer', pronunciation: '/ˈfɑːrmər/', vietnamese: 'nông dân' },
                        { term: 'singer', pronunciation: '/ˈsɪŋər/', vietnamese: 'ca sĩ' },
                        { term: 'artist', pronunciation: '/ˈɑːrtɪst/', vietnamese: 'họa sĩ' },
                        { term: 'dentist', pronunciation: '/ˈdɛntɪst/', vietnamese: 'nha sĩ' },
                    ],
                    grammar: [
                        { title: { en: 'Present Simple for routines', vi: 'Thì Hiện tại đơn cho thói quen' }, explanation: { en: ["Use Present Simple to talk about what people do in their jobs.", "Example: A doctor helps sick people."], vi: ['Sử dụng thì Hiện tại đơn để nói về những gì mọi người làm trong công việc của họ.', 'Ví dụ: Một bác sĩ giúp đỡ những người bị bệnh.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Guess the job from a description.', 'Draw yourself in your dream job.'], vi: ['Đoán nghề nghiệp từ một mô tả.', 'Vẽ bản thân trong nghề nghiệp mơ ước của bạn.'] } }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: { en: 'Unit 7: The city', vi: 'Bài 7: Thành phố' },
            lessons: [
                {
                    id: 60701,
                    title: { en: 'Places in the city and directions', vi: 'Các địa điểm trong thành phố và chỉ đường' },
                    aims: {
                        en: ['Identify and name places in a city.', 'Ask for and give directions.'],
                        vi: ['Nhận biết và gọi tên các địa điểm trong thành phố.', 'Hỏi và chỉ đường.']
                    },
                    vocabulary: [
                        { term: 'park', pronunciation: '/pɑrk/', vietnamese: 'công viên', imageUrl: `${SM_BASE}park.png` },
                        { term: 'supermarket', pronunciation: '/ˈsupərˌmɑrkɪt/', vietnamese: 'siêu thị', imageUrl: `${SM_BASE}supermarket.png` },
                        { term: 'hospital', pronunciation: '/ˈhɑspɪtəl/', vietnamese: 'bệnh viện', imageUrl: `${SM_BASE}hospital.png` },
                        { term: 'school', pronunciation: '/skul/', vietnamese: 'trường học', imageUrl: `${SM_BASE}school.png` },
                        { term: 'library', pronunciation: '/ˈlaɪˌbrɛri/', vietnamese: 'thư viện', imageUrl: `${SM_BASE}library.png` },
                        { term: 'museum', pronunciation: '/mjuˈziəm/', vietnamese: 'bảo tàng', imageUrl: `${SM_BASE}museum.png` },
                        { term: 'cinema', pronunciation: '/ˈsɪnəmə/', vietnamese: 'rạp chiếu phim' },
                        { term: 'shop', pronunciation: '/ʃɑːp/', vietnamese: 'cửa hàng' },
                        { term: 'cafe', pronunciation: '/kæˈfeɪ/', vietnamese: 'quán cà phê' },
                        { term: 'restaurant', pronunciation: '/ˈrɛstərɑːnt/', vietnamese: 'nhà hàng' },
                        { term: 'bank', pronunciation: '/bæŋk/', vietnamese: 'ngân hàng' },
                    ],
                    grammar: [
                        { title: { en: 'Asking for directions', vi: 'Hỏi đường' }, explanation: { en: ["Use 'Where is the (park)?'", "Give directions: 'Go straight. Turn left/right.'"], vi: ['Sử dụng "Công viên ở đâu?"', 'Chỉ đường: "Đi thẳng. Rẽ trái/phải."'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Draw a map of your neighborhood and give directions.', 'Role-play asking for and giving directions.'], vi: ['Vẽ bản đồ khu phố của bạn và chỉ đường.', 'Đóng vai hỏi và chỉ đường.'] } }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: { en: 'Unit 8: The future', vi: 'Bài 8: Tương lai' },
            lessons: [
                {
                    id: 60801,
                    title: { en: 'Future predictions', vi: 'Dự đoán tương lai' },
                    aims: {
                        en: ['Talk about future predictions.', 'Use "will" and "won\'t" for future events.'],
                        vi: ['Nói về các dự đoán trong tương lai.', 'Sử dụng "will" và "won\'t" cho các sự kiện trong tương lai.']
                    },
                    vocabulary: [
                        { term: 'robot', pronunciation: '/ˈroʊbɑt/', vietnamese: 'người máy', imageUrl: `${SM_BASE}robot.png` },
                        { term: 'fly', pronunciation: '/flaɪ/', vietnamese: 'bay', imageUrl: `${SM_BASE}fly.png` },
                        { term: 'space', pronunciation: '/speɪs/', vietnamese: 'không gian', imageUrl: `${SM_BASE}space.png` },
                        { term: 'future', pronunciation: '/ˈfjutʃər/', vietnamese: 'tương lai', imageUrl: `${SM_BASE}future.png` },
                        { term: 'travel', pronunciation: '/ˈtrævəl/', vietnamese: 'du lịch', imageUrl: `${SM_BASE}travel.png` },
                        { term: 'live', pronunciation: '/lɪv/', vietnamese: 'sống', imageUrl: `${SM_BASE}live.png` },
                        { term: 'flying car', pronunciation: '/ˈflaɪɪŋ kɑːr/', vietnamese: 'ô tô bay' },
                        { term: 'moon base', pronunciation: '/muːn beɪs/', vietnamese: 'căn cứ trên mặt trăng' },
                        { term: 'teleporter', pronunciation: '/ˈtɛlɪpɔːrtər/', vietnamese: 'máy dịch chuyển tức thời' },
                        { term: 'cyborg', pronunciation: '/ˈsaɪbɔːrɡ/', vietnamese: 'người máy sinh học' },
                    ],
                    grammar: [
                        { title: { en: 'Future Simple with "will"', vi: 'Thì Hiện tại đơn với "will"' }, explanation: { en: ["Use 'will' for predictions and future actions.", "Example: People will live on the moon. Robots won't do homework."], vi: ['Sử dụng "will" cho các dự đoán và hành động trong tương lai.', 'Ví dụ: Con người sẽ sống trên mặt trăng. Robot sẽ không làm bài tập về nhà.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Discuss what life will be like in 100 years.', 'Draw and describe a future invention.'], vi: ['Thảo luận về cuộc sống sẽ như thế nào trong 100 năm nữa.', 'Vẽ và mô tả một phát minh trong tương lai.'] } }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: { en: 'Unit 9: The world', vi: 'Bài 9: Thế giới' },
            lessons: [
                {
                    id: 60901,
                    title: { en: 'Countries and cultures', vi: 'Các quốc gia và văn hóa' },
                    aims: {
                        en: ['Identify and name different countries.', 'Talk about cultural aspects and landmarks.'],
                        vi: ['Nhận biết và gọi tên các quốc gia khác nhau.', 'Nói về các khía cạnh văn hóa và địa danh.']
                    },
                    vocabulary: [
                        { term: 'Vietnam', pronunciation: '/ˌviːətnˈɑːm/', vietnamese: 'Việt Nam', imageUrl: `${SM_BASE}vietnam.png` },
                        { term: 'USA', pronunciation: '/ˌjuː ɛs ˈeɪ/', vietnamese: 'Mỹ', imageUrl: `${SM_BASE}usa.png` },
                        { term: 'UK', pronunciation: '/ˌjuː keɪ/', vietnamese: 'Anh', imageUrl: `${SM_BASE}uk.png` },
                        { term: 'China', pronunciation: '/ˈtʃaɪnə/', vietnamese: 'Trung Quốc', imageUrl: `${SM_BASE}china.png` },
                        { term: 'Japan', pronunciation: '/dʒəˈpæn/', vietnamese: 'Nhật Bản', imageUrl: `${SM_BASE}japan.png` },
                        { term: 'Pyramids', pronunciation: '/ˈpɪrəmɪdz/', vietnamese: 'Kim tự tháp', imageUrl: `${SM_BASE}pyramids.png` },
                        { term: 'Great Wall', pronunciation: '/ɡreɪt wɔl/', vietnamese: 'Vạn Lý Trường Thành', imageUrl: `${SM_BASE}great_wall.png` },
                        { term: 'France', pronunciation: '/fræns/', vietnamese: 'Pháp' },
                        { term: 'Italy', pronunciation: '/ˈɪtəli/', vietnamese: 'Ý' },
                        { term: 'Australia', pronunciation: '/ɔːˈstreɪliə/', vietnamese: 'Úc' },
                        { term: 'Eiffel Tower', pronunciation: '/ˈaɪfəl ˈtaʊər/', vietnamese: 'Tháp Eiffel' },
                        { term: 'Colosseum', pronunciation: '/ˌkɑːləˈsiːəm/', vietnamese: 'Đấu trường La Mã' },
                    ],
                    grammar: [
                        { title: { en: 'Asking about origin', vi: 'Hỏi về nguồn gốc' }, explanation: { en: ["Use 'Where are you from? I'm from (Vietnam).'", "Use 'What's the capital of (France)?'"], vi: ['Sử dụng "Bạn đến từ đâu? Tôi đến từ (Việt Nam)."', 'Sử dụng "Thủ đô của (Pháp) là gì?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Match countries to their flags and landmarks.', 'Research and present about a country.'], vi: ['Nối các quốc gia với cờ và địa danh của chúng.', 'Nghiên cứu và trình bày về một quốc gia.'] } }
                    ]
                }
            ]
        }
    ]
};