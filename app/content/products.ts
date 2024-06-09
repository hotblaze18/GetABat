
export enum ProductCategory {
    BATS = 'Bats',
    PADS = 'Pads',
    KITS = 'Kits',
    GLOVES = 'Gloves',
    BALLS = 'Balls'
}



const PADS_CONTENT = [
    {
        title: 'GETABAT Combo Thigh Pads - White',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/combo-thigh-pads-white-1.jpg', '/images/products/pads/combo-thigh-pads-white-2.jpg'],
        variant: {  type: 'Combo Thigh Pads', color: 'White', colorRepHexGradient: ['#FFFFFF'], size: 'Full' },
        price: 1800,
        description: 'Our GETABAT combo thigh pads come in a pair of two, one for the outer part of the front facing thigh, one for the inner portion of the back thigh. Our combo thigh pads offer proper protection to your thighs by covering them fully with abundant padding enough to absorb the impact of quick deliveries. Additionally, our thigh pads are light in weight to provide batters with full comfort so they can maintain their focus on scoring runs.'
    },
    {
        title: 'GETABAT Combo Thigh Pads - Blue',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/combo-thigh-pads-blue-1.jpg'],
        variant: { type: 'Combo Thigh Pads', color: 'Blue', colorRepHexGradient: ['#0000FF'], size: 'Full' },
        price: 1800,
        description: 'Our GETABAT combo thigh pads come in a pair of two, one for the outer part of the front facing thigh, one for the inner portion of the back thigh. Our combo thigh pads offer proper protection to your thighs by covering them fully with abundant padding enough to absorb the impact of quick deliveries. Additionally, our thigh pads are light in weight to provide batters with full comfort so they can maintain their focus on scoring runs.'
    },
    {
        title: 'GETABAT Test Batting pads - White',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/test-batting-white-1.jpg'],
        variant: {  type: 'Test Batting Pads', color: 'White', colorRepHexGradient: ['#FFFFFF'], size: 'Full' },
        price: 2800,
        description: 'Our GETABAT Test edition batting pads provide full protection to your legs with ample padding which is capable of absorbing the force of fastest of deliveries. Whether while batting or running between the wickets, these lightweight, well-fitting pads offer full comfort to batters while at the pitch. Batters will be able to utilize the comfort, flexibility and durability of these pads along with stylish looks, as well.'
    },
    {
        title: 'GETABAT Test Batting pads - White',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/test-batting-white-1.jpg'],
        variant: {  type: 'Test Batting Pads', color: 'White', colorRepHexGradient: ['#FFFFFF'], size: 'Youth' },
        price: 2800,
        description: 'Our GETABAT Test edition batting pads provide full protection to your legs with ample padding which is capable of absorbing the force of fastest of deliveries. Whether while batting or running between the wickets, these lightweight, well-fitting pads offer full comfort to batters while at the pitch. Batters will be able to utilize the comfort, flexibility and durability of these pads along with stylish looks, as well.'
    },
    {
        title: 'GETABAT Test Batting pads - Blue',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/test-batting-blue-1.jpg'],
        variant: {  type: 'Test Batting Pads', color: 'Blue', colorRepHexGradient: ['#0000FF'], size: 'Full' },
        price: 2800,
        description: 'Our GETABAT Test edition batting pads provide full protection to your legs with ample padding which is capable of absorbing the force of fastest of deliveries. Whether while batting or running between the wickets, these lightweight, well-fitting pads offer full comfort to batters while at the pitch. Batters will be able to utilize the comfort, flexibility and durability of these pads along with stylish looks, as well.'
    },
    {
        title: 'GETABAT Test Batting pads - Blue',
        category: ProductCategory.PADS,
        images: ['/images/products/pads/test-batting-blue-1.jpg'],
        variant: {  type: 'Test Batting Pads', color: 'Blue', colorRepHexGradient: ['#0000FF'], size: 'Youth' },
        price: 2800,
        description: 'Our GETABAT Test edition batting pads provide full protection to your legs with ample padding which is capable of absorbing the force of fastest of deliveries. Whether while batting or running between the wickets, these lightweight, well-fitting pads offer full comfort to batters while at the pitch. Batters will be able to utilize the comfort, flexibility and durability of these pads along with stylish looks, as well.'
    },
];

const KITS_CONTENT = [
    {
        title: 'GETABAT Regent Kitbag - Orange',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/regent-kitbag-orange-1.jpg', '/images/products/kits/regent-kitbag-orange-2.jpg', '/images/products/kits/regent-kitbag-orange-3.jpg', '/images/products/kits/regent-kitbag-orange-4.jpg'],
        variant: { type: 'Regent Kitbag',color: 'Orange', colorRepHexGradient: ['#FFA500'], size: 'Full' },
        price: 3299,
        description: 'The GETABAT Regent edition kitbags come with plenty of capacity and multiple compartments for players to organize all of their equipment efficiently without clutter. These kitbags offer high durability in all conditions for all equipment stored within. Regent kitbags have integrated wheels for players to be able to role the kits when needed.'
    },
    {
        title: 'GETABAT Regent Kitbag - Purple',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/regent-kitbag-purple-1.jpg', '/images/products/kits/regent-kitbag-purple-2.jpg', '/images/products/kits/regent-kitbag-purple-3.jpg', '/images/products/kits/regent-kitbag-purple-4.jpg'],
        variant: { type: 'Regent Kitbag', color: 'Purple', colorRepHexGradient: ['#8A2BE2', '#4B0082'], size: 'Full' },
        price: 3299,
        description: 'The GETABAT Regent edition kitbags come with plenty of capacity and multiple compartments for players to organize all of their equipment efficiently without clutter. These kitbags offer high durability in all conditions for all equipment stored within. Regent kitbags have integrated wheels for players to be able to role the kits when needed.'
    },
    {
        title: 'GETABAT Beginners’ Kits',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/begginer-kit-1.jpg'],
        variant: {  type: 'Beginners Kit', color: 'Black', colorRepHexGradient: ['#000000'], size: 'Size 3' },
        price: 6000,
        description: 'GETABAT beginner level kits come with all equipment necessary to play season ball cricket. These kits include a bat, a helmet, batting pads, a thigh pad, an elbow pad, gloves, an abdominal guard and a kitbag to store all of these items. Our beginner level equipment will allow players to develop their skills with comfort and protection.'
    },
    {
        title: 'GETABAT Beginners’ Kits',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/begginer-kit-1.jpg'],
        variant: { type: 'Beginners Kit', color: 'Black', colorRepHexGradient: ['#000000'], size: 'Size 5' },
        price: 6000,
        description: 'GETABAT beginner level kits come with all equipment necessary to play season ball cricket. These kits include a bat, a helmet, batting pads, a thigh pad, an elbow pad, gloves, an abdominal guard and a kitbag to store all of these items. Our beginner level equipment will allow players to develop their skills with comfort and protection.'
    },
    {
        title: 'GETABAT Beginners’ Kits',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/begginer-kit-1.jpg'],
        variant: { type: 'Beginners Kit', color: 'Black', colorRepHexGradient: ['#000000'], size: 'Size 6' },
        price: 6999,
        description: 'GETABAT beginner level kits come with all equipment necessary to play season ball cricket. These kits include a bat, a helmet, batting pads, a thigh pad, an elbow pad, gloves, an abdominal guard and a kitbag to store all of these items. Our beginner level equipment will allow players to develop their skills with comfort and protection.'
    },
    {
        title: 'GETABAT Beginners’ Kits',
        category: ProductCategory.KITS,
        images: ['/images/products/kits/begginer-kit-1.jpg'],
        variant: { type: 'Beginners Kit', color: 'Black', colorRepHexGradient: ['#000000'], size: 'Size 7' },
        price: 7999,
        description: 'GETABAT beginner level kits come with all equipment necessary to play season ball cricket. These kits include a bat, a helmet, batting pads, a thigh pad, an elbow pad, gloves, an abdominal guard and a kitbag to store all of these items. Our beginner level equipment will allow players to develop their skills with comfort and protection.'
    },
];

const BATS_CONTENT = [{
    title: 'GETABAT Player edition Grade 1 English Willow Bat',
    category: ProductCategory.BATS,
    images: ['/images/products/bats/english-willow-grade1-1.jpg', '/images/products/bats/english-willow-grade1-2.jpg', '/images/products/bats/english-willow-grade1-3.jpg'],
    variant: { type: 'Grade 1', edition: 'Player Edition' },
    price: 18000,
    description: 'Achieve outstanding performance with the strong characteristics of GETABAT Player edition Grade 1 English Willow Bats. With a large sweet spot, these bats offer precise and controlled shots. Moreover, the exceptional durability of these bats brings great resilience allowing players to use them confidently without concerns of premature wear and tear.'
}, {
    title: 'GETABAT Power edition India\'s finest willow bat',
    category: ProductCategory.BATS,
    images: ['/images/products/bats/power-edition-willow-1.jpg', '/images/products/bats/power-edition-willow-2.jpg', '/images/products/bats/power-edition-willow-3.jpg'],
    variant: { type: 'Grade 1', edition: 'Power Edition' },
    price: 5400,
    description: 'Experience the top grade of India\'s finest willow cricket bats in our Power edition bat. These Grade 1 bats of premium quality Indian willow offer great balance and strong shot power which will ensure good competitive performance. Not only do these bats help you achieve exclusive performance, they also contribute to the support and promotion of local business within India.'
}, {
    title: 'GETABAT Fire edition India\'s Finest willow bat',
    category: ProductCategory.BATS,
    images: ['/images/products/bats/fire-edition-willow-1.jpg', '/images/products/bats/fire-edition-willow-2.jpg', '/images/products/bats/fire-edition-willow-3.jpg'],
    variant: { type: 'Grade 2', edition: 'Fire Edition' },
    price: 3899,
    description: 'Experience fine quality of India\'s best willow cricket bats in combination with affordability in our Fire edition bats. These Grade 2 Indian willow bats are ideal for matches and practice sessions, both, as they allow you to display and work on your batting skills without having to spend big amounts. Additionally, our Fire edition bats are perfect for beginner players getting started with their cricketing journeys. Overall, our Fire edition India\'s finest willow cricket bats are a great fit for all types of players\' needs.'
}]

const GLOVES_CONTENT = [
    {
        title: 'GETABAT Test edition batting gloves - Gold',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/test-gloves-gold-1.jpg', '/images/products/gloves/test-gloves-gold-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Test Edition', color: 'Gold', colorRepHexGradient: ['#FFD700'] },
        price: 2000,
        description: 'Our GETABAT Test edition batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Test edition batting gloves - White',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/test-gloves-white-1.jpg', '/images/products/gloves/test-gloves-white-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Test Edition', color: 'White', colorRepHexGradient: ['#FFFFFF'] },
        price: 2000,
        description: 'Our GETABAT Test edition batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Cut Batting gloves - Full size',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/cut-batting-gloves-fullsize-1.jpg', '/images/products/gloves/cut-batting-gloves-fullsize-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Cut Edition', color: 'White', colorRepHexGradient: ['#FFFFFF'], size: 'Full' },
        price: 2000,
        description: 'Our GETABAT Cut edition batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Cut Batting Gloves - Youth size',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/cut-batting-gloves-youthsize-1.jpg', '/images/products/gloves/cut-batting-gloves-youthsize-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Cut Edition', color: 'White', colorRepHexGradient: ['#FFFFFF'], size: 'Youth' },
        price: 2000,
        description: 'Our GETABAT Cut edition batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Turbo-Grip Batting Gloves - Blue',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/turbo-grip-blue-1.jpg', '/images/products/gloves/turbo-grip-blue-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Turbo-Grip Edition', color: 'Blue', colorRepHexGradient: ['#0000FF'] },
        price: 1800,
        description: 'Our GETABAT Turbo-Grip batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Turbo-Grip Batting Gloves - White',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/turbo-grip-white-1.jpg', '/images/products/gloves/turbo-grip-white-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Turbo-Grip Edition', color: 'White', colorRepHexGradient: ['#FFFFFF'] },
        price: 1800,
        description: 'Our GETABAT Turbo-Grip batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Master edition Batting Gloves',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/master-edition-batting-1.jpg', '/images/products/gloves/master-edition-batting-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Master Edition', color: 'White', colorRepHexGradient: ['#FFFFFF'] },
        price: 1300,
        description: 'Our GETABAT Master edition batting gloves are designed for ultimate comfort, control and protection at the crease. These gloves are crafted with high-quality materials to ensure durability and long-lasting performance. The gloves are designed to provide batters with a firm grip on the bat handle to ensure that they can maintain their control and focus on scoring runs.'
    },
    {
        title: 'GETABAT Pro Batting gloves - Blue and White',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/pro-batting-blue-white-1.jpg', '/images/products/gloves/pro-batting-blue-white-1.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Pro Edition', color: 'Blue and White', colorRepHexGradient: ['#0000FF', '#FFFFFF'] },
        price: 2400,
        description: 'Experience excellence with our premium-grade pittard leather gloves, specially crafted to blend the luxurious softness of fine leather and enduring durability that ensures long-lasting performance and comfort. Presenting GETABAT Pro Batting gloves.'
    },
    {
        title: 'GETABAT Pro Batting gloves - Yellow, Blue and White',
        category: ProductCategory.GLOVES,
        images: ['/images/products/gloves/pro-batting-blue-yellow-white-1.jpg', '/images/products/gloves/pro-batting-blue-yellow-white-2.jpg'],
        variant: { type: 'Batting Gloves', edition: 'Pro Edition', color: 'Yellow, Blue and White', colorRepHexGradient: ['#FFFF00', '#0000FF', '#FFFFFF'] },
        price: 2400,
        description: 'Experience excellence with our premium-grade pittard leather gloves, specially crafted to blend the luxurious softness of fine leather and enduring durability that ensures long-lasting performance and comfort. Presenting GETABAT Pro Batting gloves.'
    }
]

const BALLS_CONTENT = [
    {
        title: 'GETABAT Supreme 50+ ball',
        category: ProductCategory.BALLS,
        images: ['/images/products/balls/50plus-red.jpg'],
        variant: { type: 'Cricket Balls 50+ overs', color: 'Red', colorRepHexGradient: ['#FF0000'] },
        price: 600,
        description: 'GETABAT Supreme cricket balls are designed to offer consistent bounce, durability and game-changing spin. These balls are ideal for matches and practice sessions as they allow bowlers to display their skills with confidence. Our Supreme cricket balls are perfect for all types of players and are suitable for up to 50 overs depending on usage..'
    },
    {
        title: 'GETABAT Supreme 50+ ball',
        category: ProductCategory.BALLS,
        images: ['/images/products/balls/50plus-white.jpg'],
        variant: { type: 'Cricket Balls 50+ overs', color: 'White', colorRepHexGradient: ['#FFFFFF']},
        price: 600,
        description: 'GETABAT Supreme cricket balls are designed to offer consistent bounce, durability and game-changing spin. These balls are ideal for matches and practice sessions as they allow bowlers to display their skills with confidence. Our Supreme cricket balls are perfect for all types of players and are suitable for up to 50 overs depending on usage..'
    },
    {
        title: 'GETABAT Supreme Test Ball',
        category: ProductCategory.BALLS,
        images: ['/images/products/balls/test-red.jpg'],
        variant: { type: 'Cricket Balls 80+ overs', color: 'Red', colorRepHexGradient: ['#FF0000'] },
        price: 700,
        description: 'GETABAT Supreme Test cricket balls are designed to offer consistent bounce, durability and game-changing spin. These balls are ideal for matches and practice sessions as they allow bowlers to display their skills with confidence. Our Supreme Test cricket balls are perfect for all types of players and are suitable for up to 80 overs depending on usage.'
    }
];


export const PRODUCTS_CONTENT = [
    ...PADS_CONTENT,
    ...KITS_CONTENT,
    ...BATS_CONTENT,
    ...GLOVES_CONTENT,
    ...BALLS_CONTENT
] as {
    title: string;
    category: ProductCategory;
    images: string[];
    variant: { type?: string; edition?: string, color?: string, size?: string, colorRepHexGradient?: string[] };
    price: number;
    description: string;
}[];

export const SubCategoryKeyMap: { [k in ProductCategory]: string[] } = {
    [ProductCategory.PADS]: ['type'],
    [ProductCategory.KITS]: ['type'],
    [ProductCategory.BATS]: ['type'],
    [ProductCategory.GLOVES]: ['type', 'edition'],
    [ProductCategory.BALLS]: ['type']
}