<p align="center">
  <img src="public/assets/images/ideogram.png" alt="PromptCraft Logo" width="200" />
</p>

<h1 align="center">PromptCraft - AI-Powered Prompt Generator</h1>

<p align="center">Unleash Creativity with AI-Generated Prompts</p>

<p align="center">
  <a href="https://promptcraft.netlify.app/" target="_blank">
    🚀 Live Demo
  </a>
  •
  <a href="#features">
    ✨ Features
  </a>
  •
  <a href="#getting-started">
    🛠️ Getting Started
  </a>
  •
  <a href="#technologies-used">
    🛡️ Technologies Used
  </a>
  •
  <a href="#contributing">
    🤝 Contributing
  </a>
  •
  <a href="#acknowledgments">
    🙏 Acknowledgments
  </a>
</p>


![PromptCraft Screenshot](/public/assets/screenshots/mainpage.png)
* **Main Page**: This is the main page of PromptCraft where users can browse and discover a feed of recently shared prompts. Users can interact with prompts by liking or unliking them.

![PromptCraft Screenshot](/public/assets/screenshots/mainpagewhenlogedin.png)
* **Main Page (Logged In)**: When a user is logged in, the main page may have additional features or options tailored to their account. Here, you can see how the user interface adapts to the logged-in state.

![PromptCraft Screenshot](/public/assets/screenshots/togglemainpage.png)
* **Toggle Main Page**: This screenshot showcases a toggle feature on the main page, allowing users to switch between different views or modes. Provide more details about what these different modes offer.

![PromptCraft Screenshot](/public/assets/screenshots/search.png)
* **Search Feature**: Users can utilize the search functionality to find prompts based on keywords or specific criteria. Explain how users can use this feature effectively.

![PromptCraft Screenshot](/public/assets/screenshots/tagSearch.png)
* **Tag Search**: This screenshot demonstrates the tag search feature, where prompts are categorized with relevant topics. Describe how tags work and how they help users discover prompts of interest.

![PromptCraft Screenshot](/public/assets/screenshots/createpage.png)
* **Create Prompt Page**: Here, users can create and share their own prompts. Walk users through the process of creating and sharing prompts, including adding tags and any other relevant details.

![PromptCraft Screenshot](/public/assets/screenshots/editpage.png)
* **Edit Prompt Page**: This screenshot shows the interface for editing existing prompts. Explain how users can edit their previously shared prompts and any options available on this page.

![PromptCraft Screenshot](/public/assets/screenshots/profile.png)
* **User Profile**: Users can access their profile page to view prompts they have shared and manage their account. Provide insights into the features available on the user profile page.

![PromptCraft Screenshot](/public/assets/screenshots/likedprompts.png)
* **Liked Prompts**: This screenshot illustrates the section where users can view and manage prompts they have liked on the platform. It provides an organized way for users to revisit their favorite prompts, offering a convenient way to stay inspired and engaged with the content they appreciate.





## Features

### 1. Unleash Your Creativity

PromptCraft empowers creators with a robust AI-driven prompt generator, designed to fuel your artistic and AI projects with an endless stream of inspiring ideas. Whether you're an artist, writer, or developer, PromptCraft provides the spark you need to take your projects to new heights. With the power of AI at your fingertips, your creative potential knows no bounds.

### 2. Community-Driven Prompts

Dive into a treasure trove of prompts crafted by a vibrant and passionate community. Discover, share, and be inspired by the collective creativity of like-minded individuals. Explore an ever-growing library of prompts that cover a wide range of themes and topics. Connect with fellow creators, exchange ideas, and build a network that fosters innovation and collaboration.

### 3. Effortless Sign-In

Experience a seamless onboarding process by logging in via Google. Join a welcoming community of creators who share your passion for unleashing creativity. Your personalized PromptCraft experience begins with a simple and secure sign-in. Say goodbye to lengthy registration forms and hello to a world of inspiration.

### 4. Secure & Scalable

PromptCraft is backed by a robust MongoDB database, ensuring the security and scalability of your prompts. Your creative work deserves a reliable foundation that can grow with your ambitions. Rest assured that your prompts are safe and accessible whenever you need them. Focus on what matters most—your creative journey.

### 5. Stunning & Responsive UI

Tailwind CSS powers a visually stunning and responsive user interface, making your experience on PromptCraft a delight. Whether you're browsing prompts on a desktop, tablet, or smartphone, PromptCraft adapts effortlessly to your device. Enjoy a smooth and visually pleasing interface that enhances your creative journey.

##  Key Features

- **Share Text Prompts**: Share text prompts and view prompts shared by others.
- **Like and Unlike Prompts**: Interact with prompts by liking or unliking them.
- **Tag Prompts**: Categorize prompts with relevant topics.
- **User Profiles**: Manage your shared prompts and user profile.
- **Login with Google**: Authenticate using your Google account with NextAuth.

## Usage

### Login

Login using your Google account. This will create a user profile if one does not exist.

### Home View

The home page shows a feed of recently shared prompts. You can like or unlike prompts here.

### Profile View

Access your profile page from the navbar. Here you can:

- View prompts you have shared
- Edit or delete your own prompts
- Share a new prompt

### Sharing Prompts

Share prompts from the navbar or your profile page. Add tags to help categorize your prompt.

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [MongoDB](https://www.mongodb.com/) - Database
- [NextAuth](https://next-auth.js.org/) - Authentication

##  Getting Started

To run PromptCraft locally, follow these simple steps:

1. **Clone this Repository**:

   ```bash
   git clone https://github.com/mmnsrti/promptcraft.git
   cd promptcraft

2. Install Dependencies:
```bash
cd promptcraft
npm install
```

3. Configure Environment Variables:

Create a .env.local file in the project root and add your MongoDB URI and Google OAuth credentials:
```bash
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGO_URI=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
```

4.Start the Development Server:
```bash
npm run dev
```


##  technologies-used
Next.js: The foundation of our project, delivering a fast and efficient React framework.
MongoDB: Our database of choice for prompt storage and management.
Tailwind CSS: A utility-first CSS framework for crafting a stylish and responsive UI.

##  contributing
We enthusiastically welcome contributions from the community! If you're eager to contribute to PromptCraft, please read our Contributing Guidelines.


##  Acknowledgments

Our heartfelt gratitude to the vibrant open-source community for providing the tools and libraries that empower this project.
Inspired by the limitless creative potential unlocked by AI-generated prompts.
Crafted with ❤️ by mmnsrti 
For additional information, visit the PromptCraft GitHub repository.

