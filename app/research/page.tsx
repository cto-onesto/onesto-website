import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/motion";

export default function ResearchPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <MotionDiv
      className="min-h-screen bg-white py-12 pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6">
        <MotionH1
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
          variants={itemVariants}
        >
          The Research Behind Onesto
        </MotionH1>

        <MotionDiv className="max-w-4xl mx-auto mb-16" variants={containerVariants}>
          <MotionDiv className="aspect-video w-full mb-8" variants={videoVariants}>
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/klnkxn2rsPM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <MotionP className="text-lg text-gray-700 leading-relaxed mb-6" variants={itemVariants}>
            Onesto is built upon a foundation of rigorous academic research, ensuring that our solutions are not only innovative but also deeply rooted in scientific understanding of human behavior and financial well-being. We are proud to collaborate with leading experts in the field, particularly Professors from Columbia Business School, US, whose insights have been instrumental in shaping the core principles and features of our product.
          </MotionP>
          <MotionP className="text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
            Their extensive research into behavioral economics, employee motivation, and financial psychology has guided the development of Onesto, allowing us to create a platform that genuinely addresses the needs of both employees and employers. This partnership ensures that Onesto remains at the forefront of financial wellness and employee engagement, delivering impactful and evidence-based results.
          </MotionP>
        </motion.div>

        <MotionDiv className="max-w-4xl mx-auto mb-16" variants={containerVariants}>
          <MotionH2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
            variants={itemVariants}
          >
            The Product
          </MotionH2>
          <MotionDiv className="aspect-video w-full" variants={videoVariants}>
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/klnkxn2rsPM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>

        <motion.section
          className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 rounded-xl shadow-xl text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <MotionH2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Ready to Transform Your Workplace?
          </MotionH2>
          <MotionP
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Discover how Onesto's research-backed solutions can empower your employees and drive your organization's success. Connect with our team to explore a partnership that truly makes a difference.
          </MotionP>
          <MotionDiv variants={itemVariants}>
            <Button asChild className="bg-primary hover:bg-primary/90 glow-primary rounded-xl px-8 py-3 text-lg font-semibold">
              <Link href="/contact">Contact Us to Learn More</Link>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}