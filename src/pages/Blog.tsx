
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import springImage from '/public/images/images(13).jpg';


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Spring Material for Your Application",
      excerpt: "Understanding material properties is crucial for spring performance. Learn about the key characteristics of different spring materials and how to select the best option for your specific requirements.",
      author: "Engineering Team",
      date: "2024-05-15",
      category: "Materials",
      readTime: "5 min read",
      image: springImage
    },
    {
      id: 2,
      title: "Spring Design Tips for Maximum Fatigue Life",
      excerpt: "Maximize the lifespan of your springs with proper design considerations. Explore factors that affect fatigue life and best practices for long-lasting spring performance.",
      author: "Dr. Sarah Johnson",
      date: "2024-05-10",
      category: "Design",
      readTime: "7 min read",
      image: "/public/images/images(14).jpg"
    },
    {
      id: 3,
      title: "Understanding Spring Load Calculations",
      excerpt: "Master the fundamentals of spring load calculations. This comprehensive guide covers the essential formulas and principles needed for accurate spring design.",
      author: "Michael Chen",
      date: "2024-05-05",
      category: "Engineering",
      readTime: "8 min read",
      image: "/public/images/Choosing-the-Best-Material-for-Custom-Made-Springs-Featured-Image-380x238-2.jpg"
    },
    {
      id: 4,
      title: "Why Precision Matters in Spring Manufacturing",
      excerpt: "Explore the importance of precision in spring manufacturing and how tight tolerances affect performance in critical applications across various industries.",
      author: "Quality Team",
      date: "2024-04-28",
      category: "Quality",
      readTime: "6 min read",
      image: "/public/images/images(14).jpg"
    },
    {
      id: 5,
      title: "Compression vs Extension vs Torsion Springs: When to Use Each",
      excerpt: "Learn the differences between spring types and discover which spring design is best suited for your specific application requirements.",
      author: "Design Team",
      date: "2024-04-20",
      category: "Design",
      readTime: "10 min read",
      image: "/public/images/torsion-springs.jpeg"
    },
    {
      id: 6,
      title: "Surface Treatments for Springs: A Complete Guide",
      excerpt: "Comprehensive overview of surface treatment options for springs, including plating, coating, and finishing processes that enhance corrosion resistance and durability.",
      author: "Manufacturing Team",
      date: "2024-04-15",
      category: "Manufacturing",
      readTime: "9 min read",
      image: "/public/images/images.jpg"
    }
  ];

  const categories = ["All", "Design", "Materials", "Engineering", "Quality", "Manufacturing"];
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, design tips, and technical guidance for spring 
              engineering and manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge>{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest spring engineering insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
          <p className="text-xl mb-8">
            Our engineering team is ready to help with your spring design challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Consult Our Engineers
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
