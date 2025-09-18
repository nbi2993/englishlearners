
import { CurriculumLevel } from '../types';

export const smStarterData: CurriculumLevel = {
    level: 0,
    title: { en: 'Super Minds Starter', vi: 'Super Minds Starter' },
    subtitle: { en: 'Primary School - Grade 1', vi: 'Tiểu học - Lớp 1' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1nFhT8dKSMvh_msQAmAC9PmQ_q4pVuYtC/view?usp=drive_link',
    units: [
        {
            id: 700,
            title: { en: 'Hello', vi: 'Xin chào' },
            lessons: [
                {
                    id: 70001,
                    title: { en: 'Greetings', vi: 'Chào hỏi' },
                    aims: {
                        en: ['Introduce names and greet others.', 'Name simple objects.', 'Listen and recognize greetings.', 'Read and write simple words related to greetings.'],
                        vi: ['Giới thiệu tên và chào hỏi người khác.', 'Đặt tên cho các đồ vật đơn giản.', 'Nghe và nhận ra lời chào.', 'Đọc và viết các từ đơn giản liên quan đến lời chào.']
                    },
                    vocabulary: [
                        { term: 'hello', pronunciation: '/həˈloʊ/', vietnamese: 'xin chào' },
                        { term: 'name', pronunciation: '/neɪm/', vietnamese: 'tên' },
                        { term: 'what', pronunciation: '/wɑːt/', vietnamese: 'cái gì' },
                    ],
                    grammar: [{
                        title: { en: 'Asking for Name', vi: 'Hỏi tên' },
                        explanation: { en: ["Use 'What\'s your name?' to ask for a name.", "Answer with 'I\'m [name].'"], vi: ['Sử dụng "What\'s your name?" để hỏi tên.', 'Trả lời bằng "I\'m [tên]".'] }
                    }]
                }
            ]
        },
        {
            id: 701,
            title: { en: 'My Classroom', vi: 'Lớp học của tôi' },
            lessons: [{
                id: 70101,
                title: { en: 'Classroom Objects', vi: 'Đồ dùng trong lớp' },
                aims: {
                    en: ['Talk about classroom items.', 'Ask and answer about classroom objects.', 'Listen and identify school supplies.', 'Read and write words for classroom supplies.'],
                    vi: ['Nói về các vật dụng trong lớp.', 'Hỏi và trả lời về các đồ vật trong lớp học.', 'Nghe và nhận biết đồ dùng học tập.', 'Đọc và viết các từ về đồ dùng trong lớp.']
                },
                vocabulary: [
                    { term: 'pen', pronunciation: '/pen/', vietnamese: 'cái bút' },
                    { term: 'book', pronunciation: '/bʊk/', vietnamese: 'quyển sách' },
                    { term: 'board', pronunciation: '/bɔːrd/', vietnamese: 'cái bảng' },
                    { term: 'desk', pronunciation: '/desk/', vietnamese: 'bàn học' },
                    { term: 'chair', pronunciation: '/tʃer/', vietnamese: 'cái ghế' },
                ],
                grammar: [{
                    title: { en: 'Singular Nouns', vi: 'Danh từ số ít' },
                    explanation: { en: ["Use 'This is a...' to refer to a single object.", "Example: This is a pen."], vi: ["Sử dụng 'This is a...' để chỉ một đối tượng.", "Ví dụ: Đây là một cây bút."] }
                }]
            }]
        },
        {
            id: 702,
            title: { en: 'My Family', vi: 'Gia đình tôi' },
            lessons: [{
                id: 70201,
                title: { en: 'Family Members', vi: 'Thành viên gia đình' },
                aims: {
                    en: ['Introduce family and its members.', 'Listen and understand conversations about family.', 'Read and understand vocabulary about family.', 'Write short sentences about family members.'],
                    vi: ['Giới thiệu gia đình và các thành viên.', 'Lắng nghe và hiểu các cuộc trò chuyện về gia đình.', 'Đọc và hiểu từ vựng về gia đình.', 'Viết những câu ngắn về các thành viên trong gia đình.']
                },
                vocabulary: [
                    { term: 'father', pronunciation: '/ˈfɑːðər/', vietnamese: 'bố' },
                    { term: 'mother', pronunciation: '/ˈmʌðər/', vietnamese: 'mẹ' },
                    { term: 'brother', pronunciation: '/ˈbrʌðər/', vietnamese: 'anh/em trai' },
                    { term: 'sister', pronunciation: '/ˈsɪstər/', vietnamese: 'chị/em gái' },
                    { term: 'grandparents', pronunciation: '/ˈɡrænperənts/', vietnamese: 'ông bà' },
                ],
                grammar: [{
                    title: { en: 'Personal Pronouns', vi: 'Đại từ nhân xưng' },
                    explanation: { en: ["He is my father.", "She is my mother.", "They are my grandparents."], vi: ["Anh ấy là bố tôi.", "Cô ấy là mẹ tôi.", "Họ là ông bà của tôi."] }
                }]
            }]
        },
        {
            id: 703,
            title: { en: 'Pets', vi: 'Vật nuôi' },
            lessons: [{
                id: 70301,
                title: { en: 'My Favorite Pet', vi: 'Thú cưng yêu thích của tôi' },
                aims: {
                    en: ['Describe their favorite pet.', 'Listen and understand conversations about pets.', 'Read short passages about pets.', 'Write short paragraphs about their pets.'],
                    vi: ['Mô tả thú cưng yêu thích của mình.', 'Nghe và hiểu các cuộc trò chuyện về thú cưng.', 'Đọc các đoạn ngắn về thú cưng.', 'Viết các đoạn văn ngắn về thú cưng của họ.']
                },
                vocabulary: [
                    { term: 'dog', pronunciation: '/dɔːɡ/', vietnamese: 'con chó' },
                    { term: 'cat', pronunciation: '/kæt/', vietnamese: 'con mèo' },
                    { term: 'fish', pronunciation: '/fɪʃ/', vietnamese: 'con cá' },
                ],
                grammar: [{
                    title: { en: 'Possessive Structure', vi: 'Cấu trúc sở hữu' },
                    explanation: { en: ["My dog.", "Her cat."], vi: ["Con chó của tôi.", "Con mèo của cô ấy."] }
                }]
            }]
        },
        {
            id: 704,
            title: { en: 'Toys', vi: 'Đồ chơi' },
            lessons: [{
                id: 70401,
                title: { en: 'My Favorite Toys', vi: 'Đồ chơi yêu thích của tôi' },
                aims: {
                    en: ['Talk about their favorite toys.', 'Listen to and recognize toys.', 'Read and understand words about toys.', 'Write short sentences describing toys.'],
                    vi: ['Nói về những món đồ chơi yêu thích của mình.', 'Nghe và nhận ra đồ chơi.', 'Đọc và hiểu các từ về đồ chơi.', 'Viết các câu ngắn mô tả đồ chơi.']
                },
                vocabulary: [
                    { term: 'doll', pronunciation: '/dɑːl/', vietnamese: 'búp bê' },
                    { term: 'car', pronunciation: '/kɑːr/', vietnamese: 'ô tô' },
                    { term: 'ball', pronunciation: '/bɔːl/', vietnamese: 'quả bóng' },
                    { term: 'building blocks', pronunciation: '/ˈbɪldɪŋ blɑːks/', vietnamese: 'khối xây dựng' },
                ],
                grammar: [{
                    title: { en: 'Singular Nouns', vi: 'Danh từ số ít' },
                    explanation: { en: ["This is my toy."], vi: ["Đây là đồ chơi của tôi."] }
                }]
            }]
        },
        {
            id: 705,
            title: { en: 'My Body', vi: 'Cơ thể của tôi' },
            lessons: [{
                id: 70501,
                title: { en: 'Parts of the Body', vi: 'Các bộ phận cơ thể' },
                aims: {
                    en: ['Describe body parts.', 'Listen, understand, and recognize words about the body.', 'Read and understand words referring to body parts.', 'Write words referring to body parts.'],
                    vi: ['Mô tả các bộ phận cơ thể.', 'Nghe, hiểu và nhận ra các từ về cơ thể.', 'Đọc và hiểu các từ đề cập đến các bộ phận cơ thể.', 'Viết các từ đề cập đến các bộ phận cơ thể.']
                },
                vocabulary: [
                    { term: 'head', pronunciation: '/hed/', vietnamese: 'đầu' },
                    { term: 'hands', pronunciation: '/hændz/', vietnamese: 'bàn tay' },
                    { term: 'feet', pronunciation: '/fiːt/', vietnamese: 'bàn chân' },
                    { term: 'eyes', pronunciation: '/aɪz/', vietnamese: 'mắt' },
                    { term: 'nose', pronunciation: '/noʊz/', vietnamese: 'mũi' },
                ],
                grammar: [{
                    title: { en: 'Possessive Words', vi: 'Từ sở hữu' },
                    explanation: { en: ["My head.", "Your hands."], vi: ["Đầu của tôi.", "Bàn tay của bạn."] }
                }]
            }]
        },
        {
            id: 706,
            title: { en: 'Clothes', vi: 'Quần áo' },
            lessons: [{
                id: 70601,
                title: { en: 'My Clothes', vi: 'Quần áo của tôi' },
                aims: {
                    en: ['Talk about their clothes.', 'Listen to and recognize words about clothes.', 'Read and recognize words about clothes.', 'Write words referring to clothes.'],
                    vi: ['Nói về quần áo của họ.', 'Nghe và nhận ra các từ về quần áo.', 'Đọc và nhận ra những từ ngữ về quần áo.', 'Viết các từ đề cập đến quần áo.']
                },
                vocabulary: [
                    { term: 'shirt', pronunciation: '/ʃɜːrt/', vietnamese: 'áo sơ mi' },
                    { term: 'pants', pronunciation: '/pænts/', vietnamese: 'quần' },
                    { term: 'shoes', pronunciation: '/ʃuːz/', vietnamese: 'giày' },
                ],
                grammar: [{
                    title: { en: 'Possessive Structure', vi: 'Cấu trúc sở hữu' },
                    explanation: { en: ["My shirt.", "Your shoes."], vi: ["Áo của tôi.", "Giày của bạn."] }
                }]
            }]
        },
        {
            id: 707,
            title: { en: 'Numbers', vi: 'Số đếm' },
            lessons: [{
                id: 70701,
                title: { en: 'Numbers 1-10', vi: 'Số từ 1 đến 10' },
                aims: {
                    en: ['Say numbers from 1 to 10.', 'Listen to and recognize numbers.', 'Read and identify numbers.', 'Write numbers from 1 to 10.'],
                    vi: ['Nói các số từ 1 đến 10.', 'Nghe và nhận biết số đếm.', 'Đọc và nhận dạng các con số.', 'Viết số từ 1 đến 10.']
                },
                vocabulary: [
                    { term: 'one', pronunciation: '/wʌn/', vietnamese: 'một' },
                    { term: 'two', pronunciation: '/tuː/', vietnamese: 'hai' },
                    { term: 'three', pronunciation: '/θriː/', vietnamese: 'ba' },
                    { term: 'four', pronunciation: '/fɔːr/', vietnamese: 'bốn' },
                    { term: 'five', pronunciation: '/faɪv/', vietnamese: 'năm' },
                    { term: 'six', pronunciation: '/sɪks/', vietnamese: 'sáu' },
                    { term: 'seven', pronunciation: '/ˈsev.ən/', vietnamese: 'bảy' },
                    { term: 'eight', pronunciation: '/eɪt/', vietnamese: 'tám' },
                    { term: 'nine', pronunciation: '/naɪn/', vietnamese: 'chín' },
                    { term: 'ten', pronunciation: '/ten/', vietnamese: 'mười' },
                ],
                grammar: [{
                    title: { en: 'Counting', vi: 'Đếm' },
                    explanation: { en: ["one, two, three..."], vi: ["một, hai, ba..."] }
                }]
            }]
        },
        {
            id: 708,
            title: { en: 'Colors', vi: 'Màu sắc' },
            lessons: [{
                id: 70801,
                title: { en: 'Naming Colors', vi: 'Gọi tên màu sắc' },
                aims: {
                    en: ['Say the names of colors.', 'Listen to and recognize colors.', 'Read and identify color words.', 'Write words for colors.'],
                    vi: ['Nói tên của các màu.', 'Nghe và nhận biết màu sắc.', 'Đọc và nhận biết các từ màu.', 'Viết các từ về màu sắc.']
                },
                vocabulary: [
                    { term: 'red', pronunciation: '/red/', vietnamese: 'đỏ' },
                    { term: 'blue', pronunciation: '/bluː/', vietnamese: 'xanh da trời' },
                    { term: 'yellow', pronunciation: '/ˈjeloʊ/', vietnamese: 'vàng' },
                    { term: 'orange', pronunciation: '/ˈɔːrɪndʒ/', vietnamese: 'cam' },
                ],
                grammar: [{
                    title: { en: 'Words for colors', vi: 'Các từ chỉ màu sắc' },
                    explanation: { en: ["red, blue, yellow..."], vi: ["đỏ, xanh, vàng..."] }
                }]
            }]
        },
        {
            id: 709,
            title: { en: 'My Home', vi: 'Nhà của tôi' },
            lessons: [{
                id: 70901,
                title: { en: 'Rooms in the House', vi: 'Các phòng trong nhà' },
                aims: {
                    en: ['Describe the rooms in a house.', 'Listen and understand conversations about homes.', 'Read words about rooms in a house.', 'Write words about rooms in a house.'],
                    vi: ['Mô tả các phòng trong nhà.', 'Nghe và hiểu các cuộc trò chuyện về nhà.', 'Đọc các từ về các phòng trong nhà.', 'Viết từ về các phòng trong nhà.']
                },
                vocabulary: [
                    { term: 'living room', pronunciation: '/ˈlɪvɪŋ ruːm/', vietnamese: 'phòng khách' },
                    { term: 'bedroom', pronunciation: '/ˈbedruːm/', vietnamese: 'phòng ngủ' },
                    { term: 'kitchen', pronunciation: '/ˈkɪtʃɪn/', vietnamese: 'nhà bếp' },
                ],
                grammar: [{
                    title: { en: 'Nouns for places', vi: 'Danh từ chỉ nơi chốn' },
                    explanation: { en: ["bedroom, kitchen..."], vi: ["phòng ngủ, nhà bếp..."] }
                }]
            }]
        },
        {
            id: 710,
            title: { en: 'At the Park', vi: 'Tại công viên' },
            lessons: [{
                id: 71001,
                title: { en: 'Outdoor Activities', vi: 'Hoạt động ngoài trời' },
                aims: {
                    en: ['Talk about outdoor activities.', 'Listen to and recognize games in the park.', 'Read words about outdoor activities.', 'Write short paragraphs about outdoor activities.'],
                    vi: ['Nói về các hoạt động ngoài trời.', 'Nghe và nhận biết các trò chơi trong công viên.', 'Đọc các từ về các hoạt động ngoài trời.', 'Viết các đoạn văn ngắn về các hoạt động ngoài trời.']
                },
                vocabulary: [
                    { term: 'games', pronunciation: '/ɡeɪmz/', vietnamese: 'trò chơi' },
                    { term: 'bicycle', pronunciation: '/ˈbaɪsɪkl/', vietnamese: 'xe đạp' },
                    { term: 'seesaw', pronunciation: '/ˈsiːsɔː/', vietnamese: 'bập bênh' },
                ],
                grammar: [{
                    title: { en: 'Verbs for actions', vi: 'Động từ chỉ hành động' },
                    explanation: { en: ["play, ride..."], vi: ["chơi, cưỡi..."] }
                }]
            }]
        },
        {
            id: 711,
            title: { en: 'Animals', vi: 'Động vật' },
            lessons: [{
                id: 71101,
                title: { en: 'Familiar Animals', vi: 'Động vật quen thuộc' },
                aims: {
                    en: ['Describe their favorite animals.', 'Ask questions about animals.', 'Listen and understand short conversations about animals.', 'Recognize animal sounds.'],
                    vi: ['Mô tả những con vật yêu thích của họ.', 'Đặt câu hỏi về động vật.', 'Nghe và hiểu các cuộc trò chuyện ngắn về động vật.', 'Nhận biết âm thanh của động vật.']
                },
                vocabulary: [
                    { term: 'dog', pronunciation: '/dɔːɡ/', vietnamese: 'con chó' },
                    { term: 'cat', pronunciation: '/kæt/', vietnamese: 'con mèo' },
                    { term: 'bird', pronunciation: '/bɜːrd/', vietnamese: 'con chim' },
                    { term: 'fish', pronunciation: '/fɪʃ/', vietnamese: 'con cá' },
                ],
                grammar: [{
                    title: { en: 'Singular and Plural Nouns', vi: 'Danh từ số ít và số nhiều' },
                    explanation: { en: ["Use 'This is a...' and 'They are...'", "Example: cat, cats"], vi: ["Sử dụng cấu trúc: \"Đây là một...\" và \"Họ là...\"", "Ví dụ: mèo, những con mèo"] }
                }]
            }]
        },
        {
            id: 712,
            title: { en: 'Daily Routines', vi: 'Hoạt động hàng ngày' },
            lessons: [{
                id: 71201,
                title: { en: 'My Day', vi: 'Ngày của tôi' },
                aims: {
                    en: ['Describe daily activities like waking up, eating breakfast, going to school, playing, sleeping.', 'Listen and understand short conversations describing daily routines.', 'Read and understand words related to daily routines.', 'Write short sentences describing daily routines.'],
                    vi: ['Mô tả các hoạt động hàng ngày như thức dậy, ăn sáng, đi học, chơi, ngủ.', 'Nghe và hiểu các cuộc trò chuyện ngắn mô tả các thói quen hàng ngày.', 'Đọc và hiểu các từ liên quan đến thói quen hàng ngày.', 'Viết các câu ngắn mô tả các thói quen hàng ngày.']
                },
                vocabulary: [
                    { term: 'wake up', pronunciation: '/weɪk ʌp/', vietnamese: 'thức dậy' },
                    { term: 'go to school', pronunciation: '/ɡoʊ tuː skuːl/', vietnamese: 'đi học' },
                    { term: 'play', pronunciation: '/pleɪ/', vietnamese: 'chơi' },
                    { term: 'sleep', pronunciation: '/sliːp/', vietnamese: 'ngủ' },
                ],
                grammar: [{
                    title: { en: 'Simple Present Tense', vi: 'Thì hiện tại đơn' },
                    explanation: { en: ["I wake up.", "I eat breakfast."], vi: ["Tôi thức dậy.", "Tôi ăn sáng."] }
                }]
            }]
        },
        {
            id: 713,
            title: { en: 'Food and Drink', vi: 'Đồ ăn và đồ uống' },
            lessons: [{
                id: 71301,
                title: { en: 'My Favorite Food', vi: 'Món ăn yêu thích của tôi' },
                aims: {
                    en: ['Talk about their favorite foods and drinks.', 'Listen and understand conversations about food and drinks.', 'Read and recognize words about food and drinks.', 'Write words related to food and drinks.'],
                    vi: ['Nói về các món ăn và đồ uống yêu thích của họ.', 'Lắng nghe và hiểu các cuộc trò chuyện về thực phẩm và đồ uống.', 'Đọc và nhận biết các từ về đồ ăn và đồ uống.', 'Viết các từ liên quan đến đồ ăn và đồ uống.']
                },
                vocabulary: [
                    { term: 'sandwich', pronunciation: '/ˈsænwɪtʃ/', vietnamese: 'bánh mì kẹp' },
                    { term: 'milk', pronunciation: '/mɪlk/', vietnamese: 'sữa' },
                    { term: 'juice', pronunciation: '/dʒuːs/', vietnamese: 'nước trái cây' },
                    { term: 'eggs', pronunciation: '/eɡz/', vietnamese: 'trứng' },
                ],
                grammar: [{
                    title: { en: 'Simple Statements', vi: 'Câu đơn giản' },
                    explanation: { en: ["This is a sandwich.", "I like milk."], vi: ["Đây là một chiếc bánh sandwich.", "Tôi thích sữa."] }
                }]
            }]
        }
    ]
};
