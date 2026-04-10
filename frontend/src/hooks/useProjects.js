// ====== useProjects Hook ===============================

import { useState, useEffect } from 'react';

// ====== Constants ===============================

const GITHUB_URL = 'https://api.github.com/users/Linnea87/repos?sort=updated&per_page=100';
const EXCLUDE_TOPIC = 'exclude-from-portfolio';

const LANGUAGE_OVERRIDES = {
    'scene-it': 'Swift',
};

// ====== Hook ===============================

const useProjects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(GITHUB_URL)
            .then(res => res.json())
            .then(data => {
                const filtered = data
                    .filter(repo =>
                        repo.description &&
                        !repo.topics.includes(EXCLUDE_TOPIC)
                    )
                    .map(repo => ({
                        ...repo,
                        language: LANGUAGE_OVERRIDES[repo.name] ?? repo.language,
                    }));
                setRepos(filtered);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return { repos, loading };
};

export default useProjects;