const ExternalLink = ({ children, href, alt, newTab = true }) => {
  return (
    <a
      className="text-gray-400 hover:text-gray-500 text-md transition ease-in-out duration-200"
      href={href}
      alt={alt}
      target={newTab === true ? '_blank' : ''}
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <footer className="flex flex-col w-full items-start justify-center max-w-2xl mx-auto space-y-4 mb-12">
    <hr className="w-full border-1 border-gray-400 dark:border-gray-500 mb-6" />
    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ExternalLink href="https://github.com/eliascm17" alt="github">
        GitHub
      </ExternalLink>
      <ExternalLink href="https://linkedin.com/in/eliascm17" alt="linkedin">
        LinkedIn
      </ExternalLink>
      <ExternalLink
        href="https://eliascm17.github.io/Resume/resume.pdf"
        alt="resume"
      >
        Resume
      </ExternalLink>
      <ExternalLink href="mailto:Elias.cmoreno17@gmail.com" alt="email">
        Email
      </ExternalLink>
      <ExternalLink href="https://twitter.com/eliascm17" alt="twitter">
        Twitter
      </ExternalLink>
      <ExternalLink href="/blog" alt="twitter" newTab={false}>
        Blog
      </ExternalLink>
    </div>
  </footer>
);

export default Footer;
