import { AWSAmplify } from '@/styles/aws-amplify';
import {
  Adobexd,
  Check,
  Chakra,
  Firebase,
  Github,
  Graphql,
  Javascript,
  LinkedIn,
  Mail,
  Next,
  Python,
  React,
  Resume,
  Samsung,
  Spotify,
  Twitter,
  X,
  TailwindCSS
} from '@/styles/index';

const Icon = ({ name, boxSize, ...props }) => {
  switch (name) {
    case 'adobexd':
      return <Adobexd {...props} boxSize={boxSize} />;
    case 'aws-amplify':
      return <AWSAmplify {...props} boxSize={boxSize} />;
    case 'check':
      return <Check {...props} boxSize={boxSize} />;
    case 'chakra':
      return <Chakra {...props} boxSize={boxSize} />;
    case 'firebase':
      return <Firebase {...props} boxSize={boxSize} />;
    case 'github':
      return <Github {...props} boxSize={boxSize} />;
    case 'graphql':
      return <Graphql {...props} boxSize={boxSize} />;
    case 'javascript':
      return <Javascript {...props} boxSize={boxSize} />;
    case 'LinkedIn':
      return <LinkedIn {...props} boxSize={boxSize} />;
    case 'mail':
      return <Mail {...props} boxSize={boxSize} />;
    case 'nextjs':
      return <Next {...props} boxSize={boxSize} />;
    case 'python':
      return <Python {...props} boxSize={boxSize} />;
    case 'react':
      return <React {...props} boxSize={boxSize} />;
    case 'resume':
      return <Resume {...props} boxSize={boxSize} />;
    case 'samsung':
      return <Samsung {...props} boxSize={boxSize} />;
    case 'spotify':
      return <Spotify {...props} boxSize={boxSize} />;
    case 'tailwind':
      return <TailwindCSS {...props} boxSize={boxSize} />;
    case 'twitter':
      return <Twitter {...props} boxSize={boxSize} />;
    case 'x':
      return <X boxSize={boxSize} />;
    default:
      return null;
  }
};

export default Icon;
