import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/utils/fetcher';

// In progress

const PersonaPage = () => {
  const router = useRouter();
  const {
    query: { persona },
  } = router;

  const { data: defaultPersona } = useSWR(
    'http://localhost:1337/api/landing-contents?filters[PersonaUrl][$eq]=Default&populate[Sections][populate]=*',
    fetcher
  );
  const { data: personaData } = useSWR(
    `http://localhost:1337/api/landing-contents?filters[PersonaUrl][$eq]=${persona}&populate[Sections][populate]=*`,
    fetcher
  );

  const [personaDataState, setPersonaDataState] = useState(defaultPersona);

  useEffect(() => {
    if (personaData && personaData['data'].length > 0) {
      setPersonaDataState(personaData);
    } else {
      setPersonaDataState(defaultPersona);
    }
  }, [personaData]);

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>
        {personaDataState &&
          personaDataState['data'][0]['attributes']['Sections'][0]['Category']}
      </p>
    </div>
  );
};

export default PersonaPage;
