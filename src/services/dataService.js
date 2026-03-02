import hero from '../data/hero.json'
import services from '../data/services.json'
import about from '../data/about.json'
import gallery from '../data/gallery.json'
import testimonials from '../data/testimonials.json'
import contact from '../data/contact.json'

export const getHero = () => hero
export const getServices = () => services.filter(s => s.is_active)
export const getAbout = () => about
export const getGallery = () => gallery.filter(g => g.is_visible)
export const getTestimonials = () => testimonials
export const getContact = () => contact
