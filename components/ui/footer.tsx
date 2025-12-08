export function Footer() {
    return (
        <footer id="contact" className="py-12 px-4 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-black mb-8">Ready to Collaborate?</h2>
                <div className="flex justify-center gap-6 mb-12">
                    <a href="mailto:mohammedbarzinje@gmail.com" className="retro-btn bg-[#b0aefb] hover:text-[#b0aefb]">
                        Email Me
                    </a>
                    <a href="https://linkedin.com" className="retro-btn bg-[#ffcdc2] hover:text-[#ffcdc2]">
                        LinkedIn
                    </a>
                </div>
                <p className="font-mono text-xs opacity-50">
                    © 2025 Mohammed Barzinje. All rights reserved. <br />
                    Based in Norway.
                </p>
            </div>
        </footer>
    );
}
