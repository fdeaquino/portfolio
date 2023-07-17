import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SkillsResume from './components/SkillsResume/SkillsResume';
import Blog from './components/Blog/Blog';
import SingleBlogView from './components/SingleBlogView/SingleBlogView';

import Footer from './components/Footer/Footer';



function App() {

  // Temporary Blog Data
  const blogData = [
    {
      id: 1,
      imgSrc: "gradia-assets/images/blog/blog-horizontal1.png",
      altText: "",
      date: "April 7th, 2023",
      title: "Pineappolis: The Majesty of Pineapples, No. 21-60875 (Pineapple Digest 2023)",
      subtitle: "Pineapple Digest Journal",
      description: "In this Pineapple Digest article, the enduring beauty and intrigue of the pineapple fruit is celebrated. The pineapple, a tropical delight, first discovered in the lush regions of South America, has been enchanting global palates since the late 15th century. Introduced to European explorers in the 1490s, the pineapple was revered for its unique structure, vibrant taste, and the intricacy of its growth process. The pineapple's journey from a small flowering plant to a fruit that sits on our kitchen tables is a long and complex one, taking almost three years. A symbol of hospitality and warmth in many cultures, the pineapple has been employed as an emblem in architecture, culinary arts, and visual aesthetics. On analysis, Pineapple Digest, in its exploration, unraveled the pineapple's delightful characteristics, emphasizing that its layered exterior only enhances its sweet, rich, and tangy flavor on the inside. This account traces the fruit's global popularity and influence, reiterating that the pineapple is not merely a fruit, but a testament to nature's wonder and bounty.",
      readTime: "3",
      category: "pineapple",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      imgSrc: "gradia-assets/images/blog/blog-horizontal2.png",
      altText: "",
      date: "January 17th, 2022",
      title: "Mangifera Indica: The Allure of Mangoes, No. 23-80507 (Mango Chronicle 2023)",
      subtitle: "Mango Chronicle Journal",
      description: "In this riveting edition of the Mango Chronicle, we explore the incredible journey and alluring charm of the mango fruit. Originating in South Asia, the mango is more than just a seasonal fruit; it is an integral part of cultural rituals, traditions, and culinary experiences in many parts of the world. Revered in ancient scripts as the 'food of the gods', mangoes have been delighting individuals with their luscious, aromatic, and succulent flesh for thousands of years. From being a symbol of prosperity in Hindu scriptures to its depiction in Buddhist art, the mango's significance extends beyond its sweet, delicious taste. The mango tree's durability and longevity, capable of fruiting even after hundreds of years, stand as a testament to nature's incredible resilience and generosity. On analysis, the Mango Chronicle, through this exploration, encapsulates the multifaceted appeal of this 'king of fruits', affirming that the mango's sweetness is more than a taste—it's an experience that resonates with memories, traditions, and the joy of shared moments.",
      readTime: "3",
      category: "mango",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      imgSrc: "gradia-assets/images/blog/blog-horizontal3.png",
      altText: "",
      date: "July 29th, 2022",
      title: "The Delicate Dance of the Honeydew: An Ode to Melons, No. 24-50788 (Fruit Gazette 2023)",
      subtitle: "Fruit Gazette Review",
      description: "In this thoughtful examination, the Fruit Gazette uncovers the sublime allure of the Honeydew Melon. Tracing its origins back to Western Asia, the Honeydew Melon is celebrated not just for its delightful taste and smooth texture, but for its enriching history and nutritional value. Regarded by the Egyptians as a sacred offering to the gods, Honeydew Melons were appreciated for their refreshing and hydrating qualities in the arid desert landscape. Its soothing green color symbolizes tranquility and fertility in many cultures, a nod to its springtime bloom and bountiful yield. The Honeydew Melon's sophisticated sweetness, amplified by its firm yet creamy texture, embodies the essence of summertime indulgence. With a high content of essential nutrients and antioxidants, it serves as a potent symbol of health and well-being. Through this review, the Fruit Gazette underscores the Honeydew Melon's position as a cherished gift of nature, reminding us of its timeless role in promoting health, joy, and unity.",
      readTime: "3",
      category: "honeydew",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      imgSrc: "gradia-assets/images/blog/blog-horizontal1.png",
      altText: "",
      date: "June 4th, 2021",
      title: "Grapefruit: A Bitter-Sweet Symphony, No. 25-78923 (Fruit Digest 2023)",
      subtitle: "Fruit Digest Chronicles",
      description: "This enlightening report from the Fruit Digest delves into the vibrant world of Grapefruit, an underappreciated citrus gem that marries the best of sweet and tart. Originating from the subtropical regions of Barbados, the Grapefruit, with its unmistakably bold flavor and distinct aroma, has taken the culinary world by storm. This citrus powerhouse owes its distinct taste to a unique blend of sugars and organic acids, leading to a zesty experience that's both bitter and sweet. The Grapefruit is not just known for its invigorating taste, but also for its plethora of health benefits. Rich in vitamin C, fiber, and other antioxidants, the Grapefruit is a staple in many diets, its fat-burning abilities making it a favorite among weight watchers. Equally versatile, it's used in everything from salads and smoothies to cocktails and desserts. The Fruit Digest's exploration of the Grapefruit emphasizes its stand as an emblem of vitality and wellness, urging us to relish its unique sensory journey.",
      readTime: "3",
      category: "grapefruit",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      imgSrc: "gradia-assets/images/blog/blog-horizontal2.png",
      altText: "",
      date: "March 15th, 2022",
      title: "Bananas: Nature's Power Bar, No. 17-54829 (Fruit Encyclopedia 2023)",
      subtitle: "Fruit Encyclopedia Digest",
      description: "This comprehensive entry in the Fruit Encyclopedia unravels the story of Bananas, a globally celebrated fruit known for its nutritional dynamism and unique flavor. The humble banana, with its easy peel-and-eat nature, serves as a convenient source of instant energy, earning it the moniker 'Nature's Power Bar'. Native to Southeast Asia, Bananas have been part of human diet for thousands of years, offering a delightful blend of sweet and creamy taste. These elongated berries are loaded with essential vitamins and minerals, including potassium, vitamin B6, and vitamin C. They're also rich in dietary fiber, aiding digestion. Bananas play a pivotal role in many traditional dishes across various cultures and can be enjoyed raw or cooked. The versatility of bananas extends beyond the kitchen, with its peels offering a range of uses from fertilization to skincare. This Fruit Encyclopedia article encapsulates the extraordinary journey of bananas from tropical forests to global supermarkets, underscoring their nutritional benefits and ubiquity in global food culture.",
      readTime: "3",
      category: "bananas",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      imgSrc: "gradia-assets/images/blog/blog-horizontal3.png",
      altText: "",
      date: "June 28th, 2022",
      title: "Strawberries: The Sweet Delight, No. 23-56039 (Fruit Chronicles 2023)",
      subtitle: "Fruit Chronicles Journal",
      description: "This fascinating journal article delves into the captivating world of Strawberries, a fruit beloved for its rich aroma, vibrant red color, juicy texture, and sweetness. Originating from Europe in the 18th century, Strawberries are widely appreciated for their distinct flavor, and have been hybridized and grown globally. Often considered a symbol of love and spring, strawberries are low in calories and high in vitamins C and K, providing significant health benefits. They're an excellent source of antioxidant-promoting vitamin C and manganese. The journal takes an in-depth look into the agricultural practices of growing strawberries and the environmental conditions that favor their growth. Additionally, the text explores the multitude of uses for strawberries in gastronomy, including their widespread use in desserts, jams, jellies, and beverages. From their botanical journey to their impact on health and cuisine, this article encapsulates the multifaceted allure of strawberries."
      ,
      readTime: "3",
      category: "strawberries",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      imgSrc: "gradia-assets/images/blog/blog-horizontal1.png",
      altText: "",
      date: "Argument Held June 5, 2023 (Decision Forthcoming)",
      title: "Watermelon: Summer's Hydrating Bounty, No. 24-74950 (Fruit Chronicles 2023)",
      subtitle: "Fruit Chronicles Journal",
      description: "This engaging article in the Fruit Chronicles Journal sheds light on Watermelon, a quintessential summer fruit known for its juicy sweetness and hydrating properties. Originating in Africa, watermelon has found a cherished place in cultures and cuisines around the world. Composed of about 92% water, it is aptly named and serves as an excellent thirst quencher during the scorching summer months. Furthermore, it is packed with vitamins A and C, and contains a good amount of potassium and magnesium. Notably, watermelon is also rich in lycopene, an antioxidant linked to heart health and cancer prevention. This publication delves into the cultivation techniques for this fruit, explores its diverse culinary uses - from salads to sorbets, and discusses the potential health benefits that make it more than just a delicious snack. The breadth and depth of watermelon's influence is tastefully portrayed in this comprehensive review.",
      readTime: "3",
      category: "watermelon",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 8,
      imgSrc: "gradia-assets/images/blog/blog-horizontal2.png",
      altText: "",
      date: "Ex. 07 Sep, 2022",
      title: "Apples: A Staple of Health and Tradition, No. 20-30421 (Orchard Diaries 2023)",
      subtitle: "Orchard Diaries Journal",
      description: "This insightful report in the Orchard Diaries Journal explores Apples, an iconic fruit that holds a special place in cultural narratives, mythology, and daily human diets around the world. Originating in Central Asia, apple trees have since spread globally, with thousands of cultivars catering to diverse taste preferences and climatic conditions. Each variety, from the tart Granny Smith to the sweet Honeycrisp, offers a unique flavor profile and culinary potential. Apples are not only delicious but also packed with fiber and vital nutrients like vitamin C and potassium. The fruit's health benefits, which include improving heart health, aiding digestion, and potentially reducing the risk of certain types of cancer, are extensively covered in this article. It also delves into the role of apples in various culinary creations, including pies, sauces, salads, and ciders. The rich history, wide-reaching influence, and health properties of apples are all eloquently detailed in this engaging feature.",
      readTime: "3",
      category: "apples",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 9,
      imgSrc: "gradia-assets/images/blog/blog-horizontal3.png",
      altText: "",
      date: "Ex. 07 Sep, 2022",
      title: "Oranges: The Juicy Citrus Powerhouse, No. 18-90201 (Citrus Chronicles 2023)",
      subtitle: "Citrus Chronicles Journal",
      description: "In this recent edition of the Citrus Chronicles Journal, the spotlight shines on Oranges, a citrus fruit celebrated worldwide for its vibrant color, refreshing taste, and impressive health benefits. Oranges originated thousands of years ago in the southeastern region of Asia and have since dispersed globally, spawning numerous varieties and hybrids. Whether enjoyed as a raw snack, a juice, or a zesty addition to culinary recipes, oranges never fail to deliver a burst of sunshine-filled flavor. Beyond their taste, oranges are a powerhouse of nutrition, packed with vitamin C, fiber, and various antioxidants. These components contribute to overall health by boosting the immune system, promoting good digestive health, and providing protective effects against certain chronic diseases. The journal article delves into the origins, health benefits, and the worldwide culinary impact of oranges, demonstrating why this citrus fruit is more than worthy of its widespread adoration.",
      readTime: "3",
      category: "organges",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 10,
      imgSrc: "gradia-assets/images/blog/blog-horizontal1.png",
      altText: "",
      date: "Ex. 07 Sep, 2022",
      title: "Blueberries: The Compact Superfruit, No. 23-22021 (Berry Encyclopedia 2023)",
      subtitle: "Berry Encyclopedia",
      description: "This edition of Berry Encyclopedia takes a deep dive into the world of Blueberries, a small yet powerful superfruit that has garnered much-deserved attention due to its health benefits and versatile culinary uses. Indigenous to North America, blueberries are now cultivated in numerous regions worldwide, yet they continue to star in classic American desserts like blueberry pie and muffins. However, the true allure of blueberries extends beyond their sweet, slightly tart flavor. They're a nutritional powerhouse, boasting high levels of antioxidants like anthocyanins, which give blueberries their distinctive deep-blue hue. These antioxidants are linked to numerous health benefits, including improved heart health, enhanced brain function, and protection against certain types of cancer. Whether you enjoy them fresh, frozen, or incorporated into a wide variety of dishes, blueberries offer a delightful combination of flavor and nutrition that is hard to beat."
      ,
      readTime: "3",
      category: "blueberries",
      imgSrcSingleBlogView: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
    // More cases here...
  ];

  return (

    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsResume />} />
          <Route path="/blog/*" element={<Blog blogData={blogData} />}>
            <Route path=":id" element={<SingleBlogView blogData={blogData} />} />
          </Route>
          {/* <Route path="/notfound" element={<NotAvailable casesData={casesData} />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />


    </div>

  );
}

export default App;
