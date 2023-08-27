function validate_linkedin_url(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return pattern.test(url);
}

// Test the function
const test_urls = [
    'https://www.linkedin.com/in/john-doe-123',
    'https://www.linkedin.com/in/jane-doe',
    'https://www.linkedin.com/in/john-doe_123',
    'https://www.linkedin.com/in/john.doe',
    'https://www.linkedin.com/in/john-doe-123/',
    'https://www.linkedin.com/in/john-doe-1234567890123456789012345678901',
    'https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114791_asid.148989926143_crid.662526548043_kw.www%20linkedin_d.c_tid.kwd-296759856208_n.g_mt.p_geo.9301558'
    
];

test_urls.forEach(url => {
    console.log(`${url}: ${validate_linkedin_url(url)}`);
});
