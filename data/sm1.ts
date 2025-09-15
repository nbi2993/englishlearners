import { CurriculumLevel } from '../types';

const SM_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/superminds_';

export const sm1Data: CurriculumLevel = {
    level: 2, // Updated to Level 2 for Primary School - Grade 2
    title: { en: 'Super Minds 1', vi: 'Super Minds 1' },
    subtitle: { en: 'Primary School - Grade 2', vi: 'Tiểu học - Lớp 2' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1wUw0aGEa5dTA6KzezWMjMtZpXj_1TLZl/view?usp=drive_link', // Placeholder, replace with actual SM1 PDF if available
    units: [
        {
            id: 1,
            title: { en: 'Unit 1: Friends', vi: 'Bài 1: Bạn bè' },
            lessons: [
                {
                    id: 50101,
                    title: { en: 'Meet the Super Friends', vi: 'Gặp gỡ những người bạn siêu đẳng' },
                    aims: {
                        en: ['Introduce yourself and others.', 'Ask and answer about names and ages.'],
                        vi: ['Giới thiệu bản thân và người khác.', 'Hỏi và trả lời về tên và tuổi.']
                    },
                    vocabulary: [
                        { term: 'What\'s your name?', pronunciation: '/wʌts jʊər neɪm/', vietnamese: 'Tên bạn là gì?' },
                        { term: 'I\'m (Thunder).', pronunciation: '/aɪm ˈθʌndər/', vietnamese: 'Tôi là (Thunder).' },
                        { term: 'How old are you?', pronunciation: '/haʊ oʊld ɑːr ju/', vietnamese: 'Bạn bao nhiêu tuổi?' },
                        { term: 'I\'m (seven).', pronunciation: '/aɪm ˈsɛvən/', vietnamese: 'Tôi (bảy) tuổi.' },
                        { term: 'Hello', pronunciation: '/həˈloʊ/', vietnamese: 'Xin chào' },
                        { term: 'Hi', pronunciation: '/haɪ/', vietnamese: 'Chào' }
                    ],
                    grammar: [
                        { title: { en: 'Greetings and Introductions', vi: 'Chào hỏi và Giới thiệu' }, explanation: { en: ["Use 'What's your name?' and 'How old are you?' to ask personal information.", "Respond with 'I'm [name]' and 'I'm [age].'"], vi: ['Sử dụng "Tên bạn là gì?" và "Bạn bao nhiêu tuổi?" để hỏi thông tin cá nhân.', 'Trả lời bằng "Tôi là [tên]" và "Tôi [tuổi]".'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Sing the ABC song.', 'Role-play introductions with a partner.'], vi: ['Hát bài hát ABC.', 'Đóng vai giới thiệu bản thân với bạn cặp.'] } }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: { en: 'Unit 2: At school', vi: 'Bài 2: Ở trường học' },
            lessons: [
                {
                    id: 50201,
                    title: { en: 'Classroom objects', vi: 'Đồ vật trong lớp học' },
                    aims: {
                        en: ['Identify and name classroom objects.', 'Ask and answer about objects.', 'Follow simple commands.'],
                        vi: ['Nhận biết và gọi tên đồ vật trong lớp học.', 'Hỏi và trả lời về đồ vật.', 'Thực hiện các mệnh lệnh đơn giản.']
                    },
                    vocabulary: [
                        { term: 'pencil', pronunciation: '/ˈpɛnsəl/', vietnamese: 'bút chì', imageUrl: `${SM_BASE}pencil.png` },
                        { term: 'pen', pronunciation: '/pɛn/', vietnamese: 'bút mực', imageUrl: `${SM_BASE}pen.png` },
                        { term: 'book', pronunciation: '/bʊk/', vietnamese: 'sách', imageUrl: `${SM_BASE}book.png` },
                        { term: 'rubber', pronunciation: '/ˈrʌbər/', vietnamese: 'cục tẩy', imageUrl: `${SM_BASE}rubber.png` },
                        { term: 'bag', pronunciation: '/bæɡ/', vietnamese: 'cặp sách', imageUrl: `${SM_BASE}bag.png` },
                        { term: 'desk', pronunciation: '/dɛsk/', vietnamese: 'bàn học', imageUrl: `${SM_BASE}desk.png` },
                        { term: 'chair', pronunciation: '/tʃɛər/', vietnamese: 'ghế', imageUrl: `${SM_BASE}chair.png` }
                    ],
                    grammar: [
                        { title: { en: 'Asking about objects', vi: 'Hỏi về đồ vật' }, explanation: { en: ["Use 'What's this? It's a (pencil).'", "Use 'Is it a pen? Yes, it is. / No, it isn't.'"], vi: ['Sử dụng "Đây là cái gì? Đó là một (bút chì)."', 'Sử dụng "Đây có phải là bút mực không? Vâng, phải. / Không, không phải."'] } },
                        { title: { en: 'Classroom commands', vi: 'Mệnh lệnh trong lớp học' }, explanation: { en: ["'Open your book, please.'", "'Close your book, please.'"], vi: ['"Làm ơn mở sách ra."', '"Làm ơn đóng sách lại."'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Listen and point to classroom objects.', 'Practice giving and following commands.'], vi: ['Nghe và chỉ vào đồ vật trong lớp học.', 'Thực hành ra lệnh và làm theo lệnh.'] } }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: { en: 'Unit 3: Let\'s play!', vi: 'Bài 3: Cùng chơi nào!' },
            lessons: [
                {
                    id: 50301,
                    title: { en: 'Toys', vi: 'Đồ chơi' },
                    aims: {
                        en: ['Identify and name different toys.', 'Ask and answer about favorite toys.', 'Talk about what someone has.'],
                        vi: ['Nhận biết và gọi tên các loại đồ chơi khác nhau.', 'Hỏi và trả lời về đồ chơi yêu thích.', 'Nói về những gì ai đó có.']
                    },
                    vocabulary: [
                        { term: 'ball', pronunciation: '/bɔl/', vietnamese: 'quả bóng', imageUrl: `${SM_BASE}ball.png` },
                        { term: 'kite', pronunciation: '/kaɪt/', vietnamese: 'cái diều', imageUrl: `${SM_BASE}kite.png` },
                        { term: 'doll', pronunciation: '/dɑl/', vietnamese: 'búp bê', imageUrl: `${SM_BASE}doll.png` },
                        { term: 'teddy bear', pronunciation: '/ˈtɛdi bɛər/', vietnamese: 'gấu bông', imageUrl: `${SM_BASE}teddy_bear.png` },
                        { term: 'car', pronunciation: '/kɑr/', vietnamese: 'ô tô', imageUrl: `${SM_BASE}car.png` },
                        { term: 'plane', pronunciation: '/pleɪn/', vietnamese: 'máy bay', imageUrl: `${SM_BASE}plane.png` }
                    ],
                    grammar: [
                        { title: { en: 'Possession with "has"', vi: 'Sở hữu với "có"' }, explanation: { en: ["Use 'What's his/her name? His/Her name's (Ben/Sue).'", "Use 'What's his/her favourite toy?'", "Use 'How old is he/she?'"], vi: ['Sử dụng "Tên của anh ấy/cô ấy là gì? Tên của anh ấy/cô ấy là (Ben/Sue)."', 'Sử dụng "Đồ chơi yêu thích của anh ấy/cô ấy là gì?"', 'Sử dụng "Anh ấy/cô ấy bao nhiêu tuổi?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Play a guessing game with toys.', 'Draw and describe your favorite toy.'], vi: ['Chơi trò đoán đồ chơi.', 'Vẽ và mô tả đồ chơi yêu thích của bạn.'] } }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: { en: 'Unit 4: My body', vi: 'Bài 4: Cơ thể của em' },
            lessons: [
                {
                    id: 50401,
                    title: { en: 'Body parts', vi: 'Các bộ phận cơ thể' },
                    aims: {
                        en: ['Identify and name parts of the body.', 'Talk about abilities using "can".'],
                        vi: ['Nhận biết và gọi tên các bộ phận cơ thể.', 'Nói về khả năng sử dụng "có thể".']
                    },
                    vocabulary: [
                        { term: 'head', pronunciation: '/hɛd/', vietnamese: 'đầu', imageUrl: `${SM_BASE}head.png` },
                        { term: 'arms', pronunciation: '/ɑrmz/', vietnamese: 'cánh tay', imageUrl: `${SM_BASE}arms.png` },
                        { term: 'legs', pronunciation: '/lɛɡz/', vietnamese: 'chân', imageUrl: `${SM_BASE}legs.png` },
                        { term: 'hands', pronunciation: '/hændz/', vietnamese: 'bàn tay', imageUrl: `${SM_BASE}hands.png` },
                        { term: 'feet', pronunciation: '/fit/', vietnamese: 'bàn chân', imageUrl: `${SM_BASE}feet.png` },
                        { term: 'eyes', pronunciation: '/aɪz/', vietnamese: 'mắt', imageUrl: `${SM_BASE}eyes.png` },
                        { term: 'ears', pronunciation: '/ɪərz/', vietnamese: 'tai', imageUrl: `${SM_BASE}ears.png` },
                        { term: 'nose', pronunciation: '/noʊz/', vietnamese: 'mũi', imageUrl: `${SM_BASE}nose.png` },
                        { term: 'mouth', pronunciation: '/maʊθ/', vietnamese: 'miệng', imageUrl: `${SM_BASE}mouth.png` }
                    ],
                    grammar: [
                        { title: { en: 'Abilities with "can"', vi: 'Khả năng với "có thể"' }, explanation: { en: ["Use 'Can you (swim)? Yes, I can. / No, I can't.'", "Use 'He/She can (swim). He/She can't (fly).'", "Use 'What can you do?'"], vi: ['Sử dụng "Bạn có thể (bơi) không? Vâng, tôi có thể. / Không, tôi không thể."', 'Sử dụng "Anh ấy/Cô ấy có thể (bơi). Anh ấy/Cô ấy không thể (bay)."', 'Sử dụng "Bạn có thể làm gì?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Sing "Head, Shoulders, Knees, and Toes".', 'Play "Simon Says" with body parts and actions.'], vi: ['Hát bài "Đầu, Vai, Gối, Ngón chân".', 'Chơi trò "Simon Says" với các bộ phận cơ thể và hành động.'] } }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: { en: 'Unit 5: Animals', vi: 'Bài 5: Động vật' },
            lessons: [
                {
                    id: 50501,
                    title: { en: 'Farm animals', vi: 'Động vật nông trại' },
                    aims: {
                        en: ['Identify and name farm animals.', 'Talk about where animals live.'],
                        vi: ['Nhận biết và gọi tên động vật nông trại.', 'Nói về nơi động vật sống.']
                    },
                    vocabulary: [
                        { term: 'cow', pronunciation: '/kaʊ/', vietnamese: 'bò', imageUrl: `${SM_BASE}cow.png` },
                        { term: 'horse', pronunciation: '/hɔrs/', vietnamese: 'ngựa', imageUrl: `${SM_BASE}horse.png` },
                        { term: 'sheep', pronunciation: '/ʃip/', vietnamese: 'cừu', imageUrl: `${SM_BASE}sheep.png` },
                        { term: 'chicken', pronunciation: '/ˈtʃɪkɪn/', vietnamese: 'gà', imageUrl: `${SM_BASE}chicken.png` },
                        { term: 'duck', pronunciation: '/dʌk/', vietnamese: 'vịt', imageUrl: `${SM_BASE}duck.png` },
                        { term: 'pig', pronunciation: '/pɪɡ/', vietnamese: 'lợn', imageUrl: `${SM_BASE}pig.png` }
                    ],
                    grammar: [
                        { title: { en: 'Prepositions of place', vi: 'Giới từ chỉ nơi chốn' }, explanation: { en: ["Use 'in', 'on', 'under' to describe location.", "Example: The cat is on the mat."], vi: ['Sử dụng "in", "on", "under" để mô tả vị trí.', 'Ví dụ: Con mèo ở trên tấm thảm.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Listen to animal sounds and guess the animal.', 'Draw a farm scene and describe where the animals are.'], vi: ['Nghe tiếng kêu của động vật và đoán con vật.', 'Vẽ một cảnh nông trại và mô tả vị trí của các con vật.'] } }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: { en: 'Unit 6: Food', vi: 'Bài 6: Thức ăn' },
            lessons: [
                {
                    id: 50601,
                    title: { en: 'Fruits and vegetables', vi: 'Trái cây và rau củ' },
                    aims: {
                        en: ['Identify and name different fruits and vegetables.', 'Talk about food likes and dislikes.'],
                        vi: ['Nhận biết và gọi tên các loại trái cây và rau củ khác nhau.', 'Nói về thức ăn yêu thích và không thích.']
                    },
                    vocabulary: [
                        { term: 'apple', pronunciation: '/ˈæpəl/', vietnamese: 'táo', imageUrl: `${SM_BASE}apples.png` },
                        { term: 'banana', pronunciation: '/bəˈnænə/', vietnamese: 'chuối', imageUrl: `${SM_BASE}banana.png` },
                        { term: 'orange', pronunciation: '/ˈɔrɪndʒ/', vietnamese: 'cam', imageUrl: `${SM_BASE}orange.png` },
                        { term: 'carrot', pronunciation: '/ˈkærət/', vietnamese: 'cà rốt', imageUrl: `${SM_BASE}carrots.png` },
                        { term: 'tomato', pronunciation: '/təˈmeɪtoʊ/', vietnamese: 'cà chua', imageUrl: `${SM_BASE}tomato.png` },
                        { term: 'potato', pronunciation: '/pəˈteɪtoʊ/', vietnamese: 'khoai tây', imageUrl: `${SM_BASE}potato.png` }
                    ],
                    grammar: [
                        { title: { en: 'Likes and dislikes', vi: 'Thích và không thích' }, explanation: { en: ["Use 'I like (apples).' and 'I don't like (carrots).'", "Ask 'Do you like (bananas)? Yes, I do. / No, I don't.'"], vi: ['Sử dụng "Tôi thích (táo)." và "Tôi không thích (cà rốt)."', 'Hỏi "Bạn có thích (chuối) không? Vâng, tôi có. / Không, tôi không."'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Sort fruits and vegetables.', 'Create a healthy meal plan.'], vi: ['Phân loại trái cây và rau củ.', 'Tạo một kế hoạch bữa ăn lành mạnh.'] } }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: { en: 'Unit 7: My house', vi: 'Bài 7: Nhà của em' },
            lessons: [
                {
                    id: 50701,
                    title: { en: 'Rooms and furniture', vi: 'Các phòng và đồ nội thất' },
                    aims: {
                        en: ['Identify and name rooms in a house.', 'Identify and name common furniture.', 'Describe where things are.'],
                        vi: ['Nhận biết và gọi tên các phòng trong nhà.', 'Nhận biết và gọi tên đồ nội thất thông thường.', 'Mô tả vị trí của đồ vật.']
                    },
                    vocabulary: [
                        { term: 'bedroom', pronunciation: '/ˈbɛdruːm/', vietnamese: 'phòng ngủ', imageUrl: `${SM_BASE}bedroom.png` },
                        { term: 'bathroom', pronunciation: '/ˈbæθruːm/', vietnamese: 'phòng tắm', imageUrl: `${SM_BASE}bathroom.png` },
                        { term: 'kitchen', pronunciation: '/ˈkɪtʃɪn/', vietnamese: 'nhà bếp', imageUrl: `${SM_BASE}kitchen.png` },
                        { term: 'living room', pronunciation: '/ˈlɪvɪŋ ruːm/', vietnamese: 'phòng khách', imageUrl: `${SM_BASE}living_room.png` },
                        { term: 'bed', pronunciation: '/bɛd/', vietnamese: 'giường', imageUrl: `${SM_BASE}bed.png` },
                        { term: 'table', pronunciation: '/ˈteɪbəl/', vietnamese: 'bàn', imageUrl: `${SM_BASE}table.png` },
                        { term: 'chair', pronunciation: '/tʃɛər/', vietnamese: 'ghế', imageUrl: `${SM_BASE}chair.png` },
                        { term: 'sofa', pronunciation: '/ˈsoʊfə/', vietnamese: 'ghế sofa', imageUrl: `${SM_BASE}sofa.png` }
                    ],
                    grammar: [
                        { title: { en: 'Prepositions of place', vi: 'Giới từ chỉ nơi chốn' }, explanation: { en: ["Use 'in', 'on', 'under', 'next to' to describe location.", "Example: The book is on the table."], vi: ['Sử dụng "in", "on", "under", "next to" để mô tả vị trí.', 'Ví dụ: Cuốn sách ở trên bàn.'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Draw your dream house and label the rooms and furniture.', 'Describe your room to a partner.'], vi: ['Vẽ ngôi nhà mơ ước của bạn và dán nhãn các phòng và đồ nội thất.', 'Mô tả phòng của bạn cho bạn cặp.'] } }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: { en: 'Unit 8: On holiday', vi: 'Bài 8: Đi nghỉ mát' },
            lessons: [
                {
                    id: 50801,
                    title: { en: 'Holiday activities', vi: 'Các hoạt động kỳ nghỉ' },
                    aims: {
                        en: ['Talk about holiday activities.', 'Ask and answer about what people are doing.'],
                        vi: ['Nói về các hoạt động kỳ nghỉ.', 'Hỏi và trả lời về những gì mọi người đang làm.']
                    },
                    vocabulary: [
                        { term: 'swim', pronunciation: '/swɪm/', vietnamese: 'bơi', imageUrl: `${SM_BASE}swim.png` },
                        { term: 'play', pronunciation: '/pleɪ/', vietnamese: 'chơi', imageUrl: `${SM_BASE}play.png` },
                        { term: 'eat', pronunciation: '/it/', vietnamese: 'ăn', imageUrl: `${SM_BASE}eat.png` },
                        { term: 'sleep', pronunciation: '/slip/', vietnamese: 'ngủ', imageUrl: `${SM_BASE}sleep.png` },
                        { term: 'take photos', pronunciation: '/teɪk ˈfoʊtoʊz/', vietnamese: 'chụp ảnh', imageUrl: `${SM_BASE}take_photos.png` },
                        { term: 'read', pronunciation: '/rid/', vietnamese: 'đọc', imageUrl: `${SM_BASE}read.png` }
                    ],
                    grammar: [
                        { title: { en: 'Present Continuous for actions now', vi: 'Thì Hiện tại tiếp diễn cho hành động đang diễn ra' }, explanation: { en: ["Use 'What are you doing? I'm (swimming).'", "Use 'He/She is (eating). They are (playing).'", "Use 'Are you (reading)? Yes, I am. / No, I'm not.'"], vi: ['Sử dụng "Bạn đang làm gì? Tôi đang (bơi)."', 'Sử dụng "Anh ấy/Cô ấy đang (ăn). Họ đang (chơi)."', 'Sử dụng "Bạn có đang (đọc sách) không? Vâng, tôi có. / Không, tôi không."'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Describe pictures of people doing holiday activities.', 'Role-play asking and answering about holiday plans.'], vi: ['Mô tả các bức tranh về những người đang làm các hoạt động kỳ nghỉ.', 'Đóng vai hỏi và trả lời về kế hoạch kỳ nghỉ.'] } }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: { en: 'Unit 9: Party clothes', vi: 'Bài 9: Quần áo dự tiệc' },
            lessons: [
                {
                    id: 50901,
                    title: { en: 'Clothes', vi: 'Quần áo' },
                    aims: {
                        en: ['Identify and name different items of clothing.', 'Talk about what people are wearing.'],
                        vi: ['Nhận biết và gọi tên các loại quần áo khác nhau.', 'Nói về những gì mọi người đang mặc.']
                    },
                    vocabulary: [
                        { term: 'hat', pronunciation: '/hæt/', vietnamese: 'mũ', imageUrl: `${SM_BASE}hat.png` },
                        { term: 'shirt', pronunciation: '/ʃɜrt/', vietnamese: 'áo sơ mi', imageUrl: `${SM_BASE}shirt.png` },
                        { term: 'dress', pronunciation: '/drɛs/', vietnamese: 'váy', imageUrl: `${SM_BASE}dress.png` },
                        { term: 'trousers', pronunciation: '/ˈtraʊzərz/', vietnamese: 'quần dài', imageUrl: `${SM_BASE}trousers.png` },
                        { term: 'shoes', pronunciation: '/ʃuz/', vietnamese: 'giày', imageUrl: `${SM_BASE}shoes.png` },
                        { term: 'socks', pronunciation: '/sɑks/', vietnamese: 'tất', imageUrl: `${SM_BASE}socks.png` }
                    ],
                    grammar: [
                        { title: { en: 'Describing clothes', vi: 'Mô tả quần áo' }, explanation: { en: ["Use 'He/She is wearing a (red shirt).'", "Use 'They are wearing (blue shoes).'", "Ask 'What is he/she wearing?'"], vi: ['Sử dụng "Anh ấy/Cô ấy đang mặc một (áo sơ mi đỏ)."', 'Sử dụng "Họ đang mặc (giày xanh)."', 'Hỏi "Anh ấy/Cô ấy đang mặc gì?"'] } }
                    ],
                    activities: [
                        { type: 'Practice', description: { en: ['Describe what classmates are wearing.', 'Design an outfit for a party.'], vi: ['Mô tả những gì bạn học đang mặc.', 'Thiết kế một bộ trang phục cho bữa tiệc.'] } }
                    ]
                }
            ]
        }
    ]
};
