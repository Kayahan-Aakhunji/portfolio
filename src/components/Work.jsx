import { motion } from "framer-motion";

const Work = ({ imgLink, webLink, title }) => {
  return (
    <motion.a
      href={webLink}
      target="_blank"
      rel="noopener noreferrer"
      className="work"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imgLink} alt="project" />
      <p>{title}</p>
      <span>check out</span>
    </motion.a>
  );
};

export default Work;
