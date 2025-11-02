const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Smart Asstor</h3>
            <p className="text-muted-foreground">
              Building glossaries with frontier precision since 2025
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Subject Management</li>
              <li>Autolinking</li>
              <li>Batch Upload</li>
              <li>Celebration Videos</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">The Legend</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Asstor</li>
              <li>The Bloodline</li>
              <li>Fort Astoria Story</li>
              <li>
                <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2025 Smart Asstor. All rights reserved. | 
            Inspired by the working animals who built the American West
          </p>
          <p className="mt-2 italic text-xs">
            "Few would remember that it was built on the backs of humble creatures 
            who never refused the weight of the future."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
