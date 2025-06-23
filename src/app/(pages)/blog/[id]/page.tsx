"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "../../../../context/TranslationContext";
import Header from "../../../../components/common/Header";
import Footer from "../../../../components/common/Footer";
import Sidebar from "../../../../components/common/BlogSidebar";
import {
  UserRound,
  MessageCircleMore,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Button from "../../../../components/ui/Button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: {
    day: number;
    month: string;
    year: number;
    fullDate: string;
  };
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  comments: number;
}

const BlogDetailsPage: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation();
  const postId = params.id as string;

  // Sample blog post data - replace with actual data from your API/database
  const blogPost: BlogPost = {
    id: postId,
    title: "Placement de Talent: Les Défis Extraordinaires du Monde Moderne",
    excerpt:
      "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources.",
    content: `
            <p class="mb-6 text-lg leading-relaxed">
                Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources. De l'autre, nous avons la levée de manière surprenante et à une vitesse incroyable des frontières et la révolution numérique.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Les Défis Démographiques</h2>
            <p class="mb-6 text-lg leading-relaxed">
                La population mondiale continue de croître à un rythme sans précédent. Cette croissance exponentielle pose des défis majeurs en termes de ressources, d'infrastructure et de durabilité. Les entreprises doivent s'adapter à cette nouvelle réalité démographique.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">La Révolution Numérique</h2>
            <p class="mb-6 text-lg leading-relaxed">
                La transformation numérique redéfinit complètement la façon dont nous travaillons et vivons. Les technologies émergentes comme l'intelligence artificielle, l'automatisation et l'Internet des objets créent de nouvelles opportunités mais aussi de nouveaux défis.
            </p>
            
            <blockquote class="border-l-4 border-orange-500 pl-6 my-8 italic text-xl text-gray-700">
                "L'adaptation est la clé de la survie dans ce monde en constante évolution. Les entreprises qui réussissent sont celles qui embrassent le changement."
            </blockquote>
            
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Solutions et Opportunités</h2>
            <p class="mb-6 text-lg leading-relaxed">
                Face à ces défis, les entreprises innovantes développent des solutions créatives. Le placement de talent devient plus stratégique que jamais, nécessitant une approche holistique qui prend en compte les compétences techniques et les soft skills.
            </p>
        `,
    author: {
      name: "Sarah Johnson",
      avatar: "/images/img_mediumshotmaleflightattendantposing_2.png",
      role: "Directrice des Ressources Humaines",
    },
    date: {
      day: 15,
      month: "Avril",
      year: 2024,
      fullDate: "15 Avril 2024",
    },
    readTime: "5 min",
    image: "/images/img_capture_1.png",
    category: "Ressources Humaines",
    tags: ["Talent", "Innovation", "Digital", "Leadership"],
    comments: 12,
  };

  const relatedPosts = [
    {
      id: "2",
      title: "L'Impact de l'IA sur le Recrutement",
      excerpt:
        "Comment l'intelligence artificielle transforme le processus de recrutement...",
      image:
        "/images/img_afroamericanmansuitholdingdocumentstalkingfemaleboss_4.png",
      date: { day: 10, month: "Avril" },
    },
    {
      id: "3",
      title: "Développement des Compétences du Futur",
      excerpt:
        "Les compétences essentielles pour réussir dans l'économie numérique...",
      image: "/images/img_capture_1.png",
      date: { day: 8, month: "Avril" },
    },
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
  };

  return (
    <div>
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-[70%]">
            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 mt-16">
              {/* Category and Meta */}
              {/* <div className="flex items-center justify-between mb-6">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {blogPost.category}
                </div>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blogPost.date.fullDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blogPost.readTime} de lecture</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircleMore className="w-4 h-4 mr-1" />
                    <span>{blogPost.comments} commentaires</span>
                  </div>
                </div>
              </div> */}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {blogPost.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                {blogPost.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 mr-2">Partager:</span>
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>

            {/* Info Bar - moved to bottom, now responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-md">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto sm:mx-0">
                {blogPost.category}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm w-fit mx-auto sm:mx-0">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{blogPost.date.fullDate}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blogPost.readTime} de lecture</span>
                </div>
                <div className="flex items-center">
                  <MessageCircleMore className="w-4 h-4 mr-1" />
                  <span>{blogPost.comments} commentaires</span>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Laisser un commentaire
              </h3>
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <textarea
                  placeholder="Votre commentaire..."
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Author Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-gray-600">{blogPost.author.role}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Expert en ressources humaines avec plus de 10 ans
                    d'expérience dans le domaine du recrutement et du
                    développement des talents.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Articles Similaires
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {post.date.day} {post.date.month}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                        Lire Plus
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[30%]">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );  
};

export default BlogDetailsPage;
