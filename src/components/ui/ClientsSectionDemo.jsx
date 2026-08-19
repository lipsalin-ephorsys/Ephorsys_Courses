import ClientsSection from "./TestimonialCard";

const statsData = [
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "$250M",
    label: "Revenue Added",
  },
  {
    value: "4.8",
    label: "Average Rating",
  },
];

const testimonialsData = [
  {
    name: "Will Smith",
    title: "Harper Education",
    quote:
      "Collaborating on this project was seamless. The vision was clearly understood, and the designs genuinely reflect my brand identity.",
    avatarSrc:
      "https://images.unsplash.com/photo-1752496906365-d5c662900cc1?w=900&auto=format&fit=crop&q=80",
    rating: 5,
  },

  {
    name: "Ikta Sollork",
    title: "PARAL CEO",
    quote:
      "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.",
    avatarSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&auto=format&fit=crop&q=80",
    rating: 4.7,
  },

  {
    name: "Alex Johnson",
    title: "Innovate Tech",
    quote:
      "A truly transformative partnership. The end result exceeded all of our expectations and has set a new standard in our industry.",
    avatarSrc:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=900&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
  {
    name: "Will Smith",
    title: "Harper Education",
    quote:
      "Collaborating on this project was seamless. The vision was clearly understood, and the designs genuinely reflect my brand identity.",
    avatarSrc:
      "https://images.unsplash.com/photo-1752496906365-d5c662900cc1?w=900&auto=format&fit=crop&q=80",
    rating: 5,
  },

  {
    name: "Ikta Sollork",
    title: "PARAL CEO",
    quote:
      "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.",
    avatarSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&auto=format&fit=crop&q=80",
    rating: 4.7,
  },

  {
    name: "Alex Johnson",
    title: "Innovate Tech",
    quote:
      "A truly transformative partnership. The end result exceeded all of our expectations and has set a new standard in our industry.",
    avatarSrc:
      "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=900&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
];

const ClientsSectionDemo = () => {
  return (
    <ClientsSection
      tagLabel="Happy Clients"
      title="Clients Love Us"
      description="Trusted by 100+ happy clients, delivering quality solutions and creating meaningful results."
      stats={statsData}
      testimonials={testimonialsData}
      primaryActionLabel="Contact Now"
      secondaryActionLabel="See All Projects"
    />
  );
};

export default ClientsSectionDemo;