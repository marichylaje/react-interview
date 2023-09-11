import contentfulClient from 'contentful';

const getEntriesContentful = async (contentType: string) => {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: contentType,
      });
      const response = entries.items;
      console.log({response})
      return response.map((entry) => entry.fields);
    } catch (error) {
      console.error('Error obtaining entries from Contentful:', error);
      return null;
    }
};

export default getEntriesContentful;