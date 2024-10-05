'use client'

import React, { useState, useEffect } from 'react'
import { Search, Bell, Settings, ChevronDown, Plus, Star, Grid, FileText, Layout, PresentationIcon, Heart, Play, Globe, Move, Upload, MoreHorizontal, Home, Folder, Shapes, AppWindow, X, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CanvaClone() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const recentDesigns = [
        { title: "Marketing presentation", image: "/1.png", modifiedDays: 2 },
        { title: "Product brochure", image: "/2.png", modifiedDays: 3 },
        { title: "Instagram post", image: "/3.png", modifiedDays: 1 },
        { title: "Business card", image: "/4.png", modifiedDays: 4 },
    ]

    return (
        <div className="flex flex-col h-screen bg-[#F9F9FB]">
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
                    <div className="p-4 flex items-center justify-between">
                        {isSidebarOpen && !isMobile && <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00C4CC] to-[#8B3DFF] text-transparent bg-clip-text transition-colors duration-1000">Minato.ai</h1>}
                        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                            {isSidebarOpen ? <X className="w-5 h-5 text-gray-400" /> : <Menu className="w-5 h-5 text-gray-400" />}
                        </Button>
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        <a href="#" className="flex items-center py-2 px-4 bg-[#F0F0F0]">
                            <Home className="w-5 h-5 mr-3 text-[#00C4CC]" />
                            {isSidebarOpen && !isMobile && <span className="text-[#00C4CC] font-medium">Home</span>}
                        </a>
                        {[
                            { name: 'Projects', icon: Folder },
                            { name: 'Templates', icon: Layout },
                            { name: 'Brand', icon: Star },
                            { name: 'Apps', icon: AppWindow },
                        ].map((item, index) => (
                            <a key={index} href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
                                <item.icon className="w-5 h-5 mr-3" />
                                {isSidebarOpen && !isMobile && item.name}
                            </a>
                        ))}
                    </nav>
                    {isSidebarOpen && !isMobile && (
                        <div className="p-4 border-t border-gray-200">
                            <Button className="w-full bg-[#8B3DFF] hover:bg-[#7B2FFF] text-white">
                                <Plus className="w-4 h-4 mr-2" />
                                Create a design
                            </Button>
                        </div>
                    )}
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                        <div className="flex items-center w-1/2 relative">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3" />
                            <Input type="text" placeholder="Search for your content" className="pl-10 w-full bg-[#F0F0F0] border-0" />
                        </div>
                        <div className="flex items-center space-x-4">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <Settings className="w-5 h-5 text-gray-600" />
                            <div className="flex items-center">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>MP</AvatarFallback>
                                </Avatar>
                                <span className="ml-2 mr-1 text-sm font-medium hidden md:inline">Personal</span>
                                <ChevronDown className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>
                    </header>

                    {/* Main content area */}
                    <main className="flex-1 overflow-y-auto p-4 md:p-6">
                        {/* Hero section */}
                        <Card className="mb-8 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] p-4 md:p-8 text-white">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-4">New Look Minato.ai</h2>
                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                                        <Button variant="secondary" className="bg-white text-[#8B5CF6] hover:bg-gray-100">
                                            Discover what's new
                                        </Button>
                                        <Button variant="outline" className="text-white bg-[#8B5CF6] hover:bg-gray-100/20">
                                            Watch the presentation again
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Design options */}
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
                            {[
                                { icon: Grid, label: 'Logo', color: 'bg-[#00C4CC]' },
                                { icon: FileText, label: 'Doc', color: 'bg-[#20C997]' },
                                { icon: Layout, label: 'Whiteboard', color: 'bg-[#51CF66]' },
                                { icon: PresentationIcon, label: 'Presentation', color: 'bg-[#FF922B]' },
                                { icon: Heart, label: 'Network', color: 'bg-[#FF6B6B]' },
                                { icon: Play, label: 'Videos', color: 'bg-[#845EF7]' },
                                { icon: Globe, label: 'Website', color: 'bg-[#339AF0]' },
                                { icon: Move, label: 'Custom', color: 'bg-gray-500' },
                                { icon: Upload, label: 'Import', color: 'bg-gray-500' },
                            ].map((item, index) => (
                                <Button key={index} variant="outline" className={`flex flex-col items-center justify-center p-2 h-24`}>
                                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-2`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xs text-center leading-tight">{item.label}</span>
                                </Button>
                            ))}
                            <Button variant="outline" className="flex flex-col items-center justify-center p-2 h-24">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                                    <MoreHorizontal className="w-6 h-6 text-gray-600" />
                                </div>
                                <span className="text-xs">More</span>
                            </Button>
                        </div>

                        {/* Recent designs */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Recent Designs</h3>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                                <Grid className="w-4 h-4 mr-2" />
                                List
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recentDesigns.map((design, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="aspect-video bg-gray-200 relative">
                                            <img 
                                                src={design.image} 
                                                alt={design.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-medium mb-1 text-sm">{design.title}</h4>
                                            <p className="text-xs text-gray-500">Modified ago {design.modifiedDays} day{design.modifiedDays > 1 ? 's' : ''}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 p-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
                    <Badge variant="secondary" className="bg-[#F0F0F0] text-gray-600">Essayer Pro pendant 30 jours</Badge>
                    <span className="text-sm text-gray-600">© 2024 Minato.ai</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600">
                        Help
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                        English
                    </Button>
                </div>
            </footer>
        </div>
    )
}