import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { profile } from "@/lib/profile";

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <BrandMark />
                    <p className="text-[14px] text-ink-soft">
                        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {profile.name}
                    </p>
                </div>

                <nav aria-label="Footer">
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
                        <li>
                            <Link href="/case-studies" className="transition-colors hover:text-ink">
                                Case studies
                            </Link>
                        </li>
                        <li>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-ink"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="#top" className="transition-colors hover:text-ink">
                                Back to top
                            </a>
                        </li>
                    </ul>
                </nav>

                <p className="text-[13px] text-muted">Built in Sarpsborg, Norway</p>
            </div>
        </footer>
    );
}
